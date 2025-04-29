const express = require('express');
const router =  express.Router();
const authenticateJWT = require('../middleware/authenticateJWT');
const authorizeRole = require('../middleware/authorizeJWT');
const controller = require('../controller/reviewsController')

router.get('/reviews', function (req, res) {
    controller.reviews(req, res);
});

router.get('/reviews/product/:productId', function (req, res) {
    controller.getProductReviews(req, res);
});

router.get('/review/:reviewId', function (req, res) {
    controller.getReviewById(req, res);
});

router.get('/review/:reviewId', function (req, res) {
    controller.updateReview(req, res);
});

router.get('/review/:reviewId', function (req, res) {
    controller.deleteReview(req, res);
});


// Routes for managing reviews
// router.post('/reviews', authenticateJWT, reviewController.createReview);
// router.get('/reviews/product/:productId', reviewController.getProductReviews);
// router.get('/review/:reviewId', reviewController.getReviewById);
// router.put('/review/:reviewId', authenticateJWT, reviewController.updateReview);
// router.delete('/review/:reviewId', authenticateJWT, reviewController.deleteReview);
module.exports = router