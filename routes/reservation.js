var express = require('express');
var reservation = express.Router();
//importing the reservation schema
var database = require('./reservationsdb.js');
var router = express.Router();
//code for getting ejs files for links
//reservation page
reservation.get('/reservations', function(req, res) {
  res.render('reservations.ejs');
});

module.exports = function(){



//post method to be used when a post request is made for submitting a reservation
  reservation.post('/reservations', function (req, res) {
    res.send('Got a POST request')
    console.log('Reservation started!');

  	var newReservation = new database();

    newReservation.reservations.firstName = req.body.firstName;
    newReservation.reservations.lastName = req.body.lastName;
    newReservation.reservations.phoneNumber = req.body.phoneNumber;
    newReservation.reservations.tube = req.body.tube;
    newReservation.reservations.email = req.body.email;

    /*
    newReservation.reservations.cost =
    newReservation.reservations.startTime =
    newReservation.reservations.endTime =
    newReservation.reservations.startDate =
    newReservation.reservations.endDate =
    newReservation.reservations.boatID =


    newReservation.boats.boatID=;
    newReservation.boats.location= req.body.location;
    newReservation.boats.boatType=req.body.vehicle;

*/
  // save the reservation
  newReservation.save(function(err) {
    if (err) throw err;

    console.log('Reservation created!');
  });

  });
    res.redirect('/reservations')






  return router;

}

module.exports = router;
