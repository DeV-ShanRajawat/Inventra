import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  poster: String,
  price: Number,
  category: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;