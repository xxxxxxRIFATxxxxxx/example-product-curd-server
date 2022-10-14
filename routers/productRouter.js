// Dependencies
const express = require('express');
const Product = require('../models/Product');

// Initialize
const productRouter = express.Router();

// Get All Product
productRouter.get('/', async (req, res) => {
    // Submit To Database
    try {
        const data = await Product.find({});
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Create Product
productRouter.post('/', async (req, res) => {
    const newProduct = new Product(req.body);

    // Submit To Database
    try {
        const data = await newProduct.save();
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Update Product
productRouter.put('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Product.findByIdAndUpdate(id, req.body);
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Delete Product
productRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Product.findByIdAndRemove(id);
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Single Product
productRouter.get('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Product.findById(id).exec();
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Export
module.exports = productRouter;