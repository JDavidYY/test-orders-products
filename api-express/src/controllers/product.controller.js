const productController = {};

const product = require('../models/product');


productController.getProduct = async (req,res) => {
    const selectedProduct = await product.find({name: req.params.name});
    res.json(selectedProduct);
};

productController.getProducts = async (req,res) => {
    const products = await product.find();
    res.json(products);
};

productController.saveProduct = async (req,res) => {
    const newProduct = new product(req.body);
    await newProduct.save();
    res.json({ok: true, result: 1});
};

module.exports = productController;