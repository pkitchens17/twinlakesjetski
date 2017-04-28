var express = require('express');
//importing the reservation schema
var database = require('./reservationsdb.js');
var router = express.Router();

//Create a new route with the  reservations/:reservations_id
var reservationRoute = router.route('/reservations/:reservations_id');

//returns all reservations
router.get('/reservationlist', function(req, res){
  console.log("I recieved a reservationlist get request");
  database.find(function (err, reservations){
    console.log(reservations);
    res.json(reservations);
  })
});


//end point for getting a single reservation by id
  router.get(function(req, res){
    //res.json({ message: 'finding reservation by id' });
    //use the reservation model to find a specific reservation
    database.findById(req.params.reservations_id, function(err, reservations){
      if (err)
      res.send(err);


      res.json(reservations);

    });
  });

  router.put(function(req, res){
    //use the reservation model to find a specific beer
    database.findById(req.params.reservations_id, function(err, reservations){
      if (err)
      res.send(err);
      var name = req.body.firstName;
      console.log(name);
      //update  reservation with new values from form
      reservations.reservations.firstName = req.body.firstName;
      reservations.reservations.firstName = req.body.firstName;
      reservations.reservations.lastName = req.body.lastName;
      reservations.reservations.phoneNumber = req.body.phoneNumber;
      reservations.reservations.tube = req.body.tube;
      reservations.reservations.email = req.body.email;
      reservations.reservations.cost = req.body.total;
      reservations.reservations.endTime = req.body.endTime;
      reservations.reservations.startTime = req.body.startTime;
      reservations.reservations.endDate =req.body.endDate;
      reservations.reservations.startDate = req.body.startDate;

      reservations.save(function(err) {
        if (err) throw err;

        res.json(reservations);
        console.log('Reservation updated!');
      });

    });
  });

  //method for deleting a reservation by id
  router.delete(function(req, res) {
    database.findByIdAndRemove(req.params.reservations_id, function(err, reservations){
      if (err)
      res.send(err);

      res.json({ message: 'reservation removed!'});

    });
  });


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
  //  newReservation.reservations.endTime = req.body.endTime;
    newReservation.reservations.startTime = req.body.startTime;
    newReservation.reservations.endDate =req.body.endDate;
    newReservation.reservations.startDate = req.body.startDate;
    newReservation.reservations.location= req.body.location;
    newReservation.reservations.boatID=req.body.vehicle;


  //save the reservation
  newReservation.save(function(err) {
    if (err) throw err;

    console.log('Reservation created!');


      res.redirect('/reservations')
    });
});
module.exports = router;
