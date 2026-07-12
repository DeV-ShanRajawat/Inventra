import CategoryModel from "../models/CategoryModel.js";

export async function getCategories(req, res) {

    let data = await CategoryModel.find();

    return res.json({
        data: data,
    });

}

export async function addCategory(req, res) {

    console.log("Received Category:");
    console.log(req.body);

    await CategoryModel.create(req.body);

    console.log("Category Saved Successfully");

    return res.json({
        message: "Category Added Successfully",
    });

}

export async function updateCategory(req, res) {

    let id = req.params.id;

    await CategoryModel.findByIdAndUpdate(id, req.body);

    console.log("Category Updated Successfully");

    return res.json({
        message: "Category Updated Successfully",
    });

}

export async function deleteCategory(req, res) {

    let id = req.params.id;

    await CategoryModel.findByIdAndDelete(id);

    console.log("Category Deleted Successfully");

    return res.json({
        message: "Category Deleted Successfully",
    });

}