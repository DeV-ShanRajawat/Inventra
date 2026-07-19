import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/inventra")
  .then(() => {
    console.log(" MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(productRoutes);
app.use(categoryRoutes);
app.use(authRoutes);

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});