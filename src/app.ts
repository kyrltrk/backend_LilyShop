import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routes/products.route";
import userRouter from "./routes/users.routes";
import connectDB from "./config/mongo";
import cookieParser from "cookie-parser";

dotenv.config();

connectDB()

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server listo en el puerto ${PORT}`);
});
