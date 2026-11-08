import { Document, model, Schema } from "mongoose";

interface IProduct extends Document {
  name: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);
export default Product;
