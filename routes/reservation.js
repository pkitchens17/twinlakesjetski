var express = require('express');
//importing the reservation schema
var database = require('./reservationsdb.js');
var router = express.Router();
//Create a new route with the  reservations/:reservations_id
var reservationRoute = router.route('/reservations/:reservations_id');

router.get('/reservationlist', function(req, res){
  console.log("I recieved a reservationlist get request");
  database.find(function (err, reservations){
    console.log(reservations);
    res.json(reservations);
  })
});


//Route for finding one reservation
router.get('/reservation/:id', function(req, res){
	console.log('Received findOne person request');
	console.log(req.params.id);
	reservations.findOne({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
		console.log(docs);
		res.json(docs);
	})
});

//Route for deleting a reservations
router.delete('/deletereservation/:id', function(req, res){
	console.log("Received delete one reservation request...");
  console.log(req.params.id);
  var id = req.params.id;
  database.findOneAndRemove({_id: id}, function(err, docs){
		console.log(docs);
    console.log("did we return a doc?");

  })


});

router.put('/updatereservation/:id/:firstName', function(req, res){
  var id =req.params.id;
  var name = req.params.firstName;
  console.log(id);
  console.log(name);
  database.findAndModify({_id: id}, {$set: {firstName: name}});

  //database.update({_id: id}, {$set: {firstName: name}});
  console.log("entry updated");
});

/*
//route for updating a reservation
router.put('/updatereservation/:id/:firstName', function(req, res){
  var id =req.params.id;
  var name = req.params.firstName;
  JSON.stringify(name);
  console.log("Recieved updatereservation request with id" + id);
  database.findOne({_id: id}, function(err, foundObject){
    console.log(foundObject.firstName);
    console.log(name);
    foundObject.firstName = req.body.firstName;
    if(err){
      console.log(err);
      re.status(500).send();

    }else{
      if(!foundObject){
        re.status(404).send();
      }else{
        if(req.body.firstName){
          console.log("updating info")
          foundObject.firstName = req.body.firstName;
        }

        foundObject.save(function(err, updatedObject){
          if(err){
            console.log(err);
            res.status(500).send();
          }else{
            console.log("reservation updated!");
          }
        })


      }
    }
  });
});
*/


  /*
  database.findAndModify({query: {"_id": new mongojs.ObjectId(req.body._id)},
            update: {$set: {firstName: req.body.firstName,  email: req.body.email, phoneNumber: req.body.phoneNumber}}
          }, function(err,docs){
            console.log(docs);
            res.json(docs);

 })


});

/*
//end point for getting a single reservation by id
  router.get(function(req, res){
    //res.json({ message: 'finding reservation by id' });
    //use the reservation model to find a specific reservation
    database.findById(req.params.reservations_id, function(err, reservations){
      if (err)
      res.send(err);

      console.log(reservations)
      res.json(reservations);

    });
  });


*/

/*
  router.put(function(req, res){
    //use the reservation model to find a specific
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
      reservations.reservations.startDate = req.body.startDate;

      reservations.save(function(err) {
        if (err) throw err;

        res.json(reservations);
        console.log('Reservation updated!');
      });

    });
  });
*/

/*
  //method for deleting a reservation by id
  router.delete(function(req, res) {
    database.findByIdAndRemove(req.params.reservations_id, function(err, reservations){
      if (err)
      res.send(err);

      res.json({ message: 'reservation removed!'});

    });
  });
*/

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
  newReservation.reservations.startDate = req.body.startDate;
  newReservation.reservations.location= req.body.location;
  newReservation.reservations.boatID=req.body.vehicle;
  newReservation.reservations.resid = newReservation._id;

//save the reservation
newReservation.save(function(err) {
  if (err) throw err;

  console.log('Reservation created!');


    res.redirect('/reservations')
  });
});
module.exports = router;
