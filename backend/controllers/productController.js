import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js';

const getProduct = asyncHandler(async (req, res, next)=> {
    const products = await Product.find({});
    res.json(products);
});

const getProductById = asyncHandler(async (req, res, next)=> {
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);
    } else {
        res.status(404);
        throw new Error ('Resource not found'); 
    }
});

export {getProduct, getProductById};