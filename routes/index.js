

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twin Lakes Jet Ski' });
});

router.get('/prices', function(req, res, next) {
  res.render('prices', { title: 'Twin Lakes Jet Ski' });
});
module.exports = router;
