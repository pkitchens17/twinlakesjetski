var express = require('express');
var router = express.Router();
//importing the reservation schema
var database = require('reservationsdb.js');

module.exports = function(){
  /* GET users listing. */
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.post('/reservationsubmit', function (req, res) {
    res.send('Got a POST request')
  	//  var newReservation = new database();
    //newReservation.reservations.firstName = req.body.firstName;
    //newDatabase.boats.location=;
  });

  return router;
}
