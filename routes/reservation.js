var express = require('express');
//importing the reservation schema
var database = require('./reservationsdb.js');
var router = express.Router();







  router.post('/reservations', function (req, res) {
    //res.send('Got a POST request')
    console.log('Reservation started!');

    var newReservation = new database();

    newReservation.reservations.firstName = req.body.firstName;
    newReservation.reservations.lastName = req.body.lastName;
    newReservation.reservations.phoneNumber = req.body.phoneNumber;
    newReservation.reservations.tube = req.body.tube;
    newReservation.reservations.email = req.body.email;


    newReservation.reservations.cost = req.body.total;
    newReservation.reservations.endTime = req.body.endTime;
    newReservation.reservations.startTime = req.body.startTime;
    newReservation.reservations.endDate =req.body.endDate;
    newReservation.reservations.startDate = req.body.startDate;


    //newReservation.reservations.boatID =


    //newReservation.boats.boatID=;
    newReservation.boats.location= req.body.location;
    newReservation.boats.boatType=req.body.vehicle;


  //save the reservation
  newReservation.save(function(err) {
    if (err) throw err;

    console.log('Reservation created!');
  });

      res.redirect('/reservations')
  });

/*
module.exports = function(){
  return router;
};
*/
module.exports = router;
