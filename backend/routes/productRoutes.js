import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

// @description fetch all products
// @route get/api/products
// @access public
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const products = await Product.find({});

        res.json(products);
    })
);

// @description fetch single product
// @route get/api/products/:id
// @access public
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            req.status(404).json({ message: "product not found" });
        }
    })
);

export default router;
