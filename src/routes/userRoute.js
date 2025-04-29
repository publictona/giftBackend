const express = require('express');
const router =  express.Router()
const controller = require('../controller/userController')

router.post('/register', function (req, res) {
    controller.register(req, res);
});

router.post('/loginUser', function (req, res) {
    controller.loginUser(req, res);
});

router.get('/:userId', function (req, res) {
    controller.getUserProfile(req, res);
});

//router.get('/profile', authenticateJWT, userController.getUserProfile);


router.put('/update/:userId', function (req, res) {
    controller.updateUserProfile(req, res);
});

router.get('/getAllUserProfile', function (req, res) {
    controller.getAllUserProfile(req, res);

});


module.exports = router