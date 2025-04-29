const express = require('express');
const router = express.Router();
//const controller = require('../controller/giftController.js')


var userDetails = require("./userRoute.js");
router.use('/userData' , userDetails);

var productData = require("./productRoute.js");
router.use('productData' , productData)

var category = require("./categoryRoute.js");
router.use('category' , category)

var payment = require("./paymentRoute.js");
router.use('payment' , payment)

var order = require("./orderRoute.js");
router.use('order' , order)

var cart = require("./cartRoute.js");
router.use('cart' , cart)

var review = require("./reviewRoute.js");
router.use('review' , review)


module.exports = router