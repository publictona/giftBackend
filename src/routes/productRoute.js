const express = require('express');
const router =  express.Router()
const authenticateJWT = require('../middleware/authenticateJWT');
const authorizeRole = require('../middleware/authorizeJWT');
const controller = require('../controller/productController');

router.post('/product', function (req, res) {
    controller.product(req, res);
});

router.get('/product/:productId', function (req, res) {
    controller.getProductById(req, res);
});

router.get('/getAllProducts', function (req, res) {
    controller.getAllProducts(req, res);
});

router.put('/updateProduct/:productId', function (req, res) {
    controller.updateProduct(req, res);
});

router.delete('/deleteProduct/:productId', function (req, res) {
    controller.deleteProduct(req, res);
});


//router.get('/products', authenticateJWT, authorizeRole('admin'), productController.getAllProducts);

module.exports = router