

var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twin Lakes Jet Ski' });
});

//code for getting ejs files for links
//reservation page
router.get('/reservations', function(req, res) {
  res.render('reservations.ejs');
});


//code for getting ejs files for links

//routing for prices page
router.get('/prices', function(req, res){
  res.render('prices.ejs');
});

//routing for jetski page
router.get('/jetskis', function(req, res) {
  res.render('jetskis.ejs');
});

//routing for whattobring page
router.get('/whattobring', function(req, res) {
  res.render('whattobring.ejs');
});

router.get('/directionsandcontact', function(req, res) {
  res.render('directionsandcontact.ejs');
});

router.get('/aboutus', function(req, res) {
  res.render('aboutus.ejs');
});

router.get('/login', function(req, res) {
  res.render('login.ejs');
});


module.exports = router;
