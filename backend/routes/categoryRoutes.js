import express from "express";

import {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/CategoryController.js";

const router = express.Router();

router.get("/categories", getCategories);

router.post("/categories", addCategory);

router.put("/categories/:id", updateCategory);

router.delete("/categories/:id", deleteCategory);

export default router;