
var express = require('express');
var router = express.Router();

router.get('/profile', isLoggedIn, function (req, res) {
    res.json({user : req.user})
});



