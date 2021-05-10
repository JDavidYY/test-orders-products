const { Router } = require('express');

const router = Router();

const productController = require('../controllers/product.controller');

router.get('/getProduct/:name', productController.getProduct);
router.get('/getProducts', productController.getProducts);
router.post('/saveProduct', productController.saveProduct);

module.exports = router;