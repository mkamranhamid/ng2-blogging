var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var indexAddress = path.resolve(__dirname,'public/dist/index.html');
  res.sendFile(indexAddress)
});

module.exports = router;
