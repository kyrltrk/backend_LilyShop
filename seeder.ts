import dotenv from "dotenv";
import mongoose from "mongoose";
import products from "./data/products";
import users from "./data/users";
import Product from "./src/models/product.model";
import User, { IUser } from "./src/models/user.model";

dotenv.config();

const importData = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);

  await Product.deleteMany({});
  await User.deleteMany({});
  console.log("Colecciones limpiadas");

  let adminUser: IUser;

  for (const u of users) {
    const newUser = new User(u);
    const savedUser = await newUser.save();

    if (savedUser.isAdmin) {
      adminUser = savedUser;
    }
  }

  const productsWithUser = products.map((product) => {
    return {
      ...product,
      user: adminUser._id,
    };
  });
  await Product.insertMany(productsWithUser);
  console.log("Seed aplicado correctamente");

  process.exit(0);
};

const destroyData = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
  await Product.deleteMany({});
  await User.deleteMany({});
  console.log("Colecciones eliminadas");
  process.exit(0);
};

if (process.argv.includes("d")) {
  console.log("Limpiando BD");
  destroyData();
} else {
  importData();
}
