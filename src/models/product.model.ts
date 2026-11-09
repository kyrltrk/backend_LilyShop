import { Document, model, Schema, Types } from "mongoose";

export interface IReview extends Document {
  user: Types.ObjectId;
  name: string;
  rating: number;
  comment: string;
}

interface IProduct extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  name: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  reviews: IReview[];
}

const reviewSchema = new Schema<IReview>(
  {
    user: {
      type: Schema.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new Schema<IProduct>(
  {
    user: {
      type: Schema.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 }, 
    reviews: [reviewSchema], 
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);
export default Product;
