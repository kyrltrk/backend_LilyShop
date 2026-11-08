import { Request, Response } from "express";
import Product from "../models/product.model";
import asyncHandler from "express-async-handler";

// const getProducts = async (req: Request, res: Response) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Error al acceder los productos", error });
//   }
// };

const getProducts = asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find({});
    if(products){
      res.json(products);
    } else {
      res.status(500);
      throw new Error("Error al acceder los productos");
    }
});

const createProduct = asyncHandler(async (req: Request, res: Response) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    if(savedProduct){
    
      res.status(201).json(savedProduct);
    } else {

      res.status(500)
      throw new Error("Error al crear el producto");
    }
});

const getProductById = asyncHandler(async (req: Request, res: Response) => {

    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404)
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
      res.status(404)
      throw new Error("Producto no encontrado");
    } else {

      res.json(updatedProduct);
    }
});

const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404)
      throw new Error("Producto no encontrado");
    } else {
      res.json({ message: "Producto eliminado correctamente" });
    }
});

export { createProduct, getProductById, getProducts, updateProduct, deleteProduct };
