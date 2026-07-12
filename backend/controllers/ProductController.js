import ProductModel from "../models/ProductModel.js";


export async function getProducts(req, res) {

    let data = await ProductModel.find();

    return res.json({
        data: data,
    });

}

export async function addProduct(req, res) {

    console.log("Received Product:");
    console.log(req.body);

    await ProductModel.create(req.body);

    console.log("Product Saved Successfully");

    return res.json({
        message: "Product Added Successfully",
    });

}

export async function updateProduct(req, res) {

    let id = req.params.id;

    await ProductModel.findByIdAndUpdate(id, req.body);

    console.log("Product Updated Successfully");

    return res.json({
        message: "Product Updated Successfully",
    });

}

export async function deleteProduct(req, res) {

    let id = req.params.id;

    await ProductModel.findByIdAndDelete(id);

    console.log("Product Deleted Successfully");

    return res.json({
        message: "Product Deleted Successfully",
    });

}