var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var indexAddress = path.resolve(__dirname,'../client/index.html');
    res.sendFile(indexAddress);
});

module.exports = router;
