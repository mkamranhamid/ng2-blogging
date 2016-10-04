var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.json({name:'kaka',title:'development'});
    //res.send('respond with a resource');
});

module.exports = router;
