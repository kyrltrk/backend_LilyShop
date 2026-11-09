import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Product, { IReview } from "../models/product.model";

// const getProducts = async (req: Request, res: Response) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Error al acceder los productos", error });
//   }
// };

const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const pageSize = 8;

  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: String(req.query.keyword),
          $options: "i", //case insensitive
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (products) {
    res.json({
      products,
      page,
      pages: Math.ceil(count / pageSize),
      totalProducts: count,
    });
  } else {
    res.status(500);
    throw new Error("Error al acceder los productos");
  }
});

const createProduct = asyncHandler(async (req: Request, res: Response) => {
  // To do indicar el usuario

  const product = {
    ...req.body,
    user: req.user?._id,
  };
  const newProduct = new Product(product);
  const savedProduct = await newProduct.save();
  if (savedProduct) {
    res.status(201).json(savedProduct);
  } else {
    res.status(500);
    throw new Error("Error al crear el producto");
  }
});

const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Producto no encontrado");
  } else {
    res.json(product);
  }
});

const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updatedProduct) {
    res.status(404);
    throw new Error("Producto no encontrado");
  } else {
    res.json(updatedProduct);
  }
});

const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deletedProduct) {
    res.status(404);
    throw new Error("Producto no encontrado");
  } else {
    res.json({ message: "Producto eliminado correctamente" });
  }
});

const createProductReview = asyncHandler(
  async (req: Request, res: Response) => {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user!._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error("El producto ya fue reseñado");
      }

      const review: IReview = {
        user: req.user!._id,
        name: req.user!.name,
        rating: Number(rating),
        comment,
      } as IReview;

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Reseña agregada" });
    } else {
      res.status(404);
      throw new Error("Producto no encontrado");
    }
  }
);

export {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
};
