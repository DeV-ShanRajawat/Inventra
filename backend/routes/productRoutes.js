import express from "express";
import {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/products", getProducts);

router.post("/products", addProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;