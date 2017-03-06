/*Auth: Patrick Kitchens
* Page for connecting to the mongodb on mlab.com
*Contains the reservation Schema
*
*
*/
var mongoose = require('mongoose');


//creating the schema for the database
var  reservationsSchema = mongoose.Schema({

    reservations :{
      boatID      : String,
      startTime   : String,
      endTime     : String,
      startDate   : String,
      endDate     : String,
      tube        : String,
      cost        : String,
      firstName   : String,
      lastName    : String,
      phoneNumber : String,
      email       : String

    },

    boats :{
      boatID    : String,
      boatType  : String,
      location  : String
    }

});


module.exports = mongoose.model('reservations', reservationsSchema);

/*
// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname
var uri = 'mongodb://<twinlakesadmin>:<jetski>@ds153729.mlab.com:53729/twinlakesjetskidb';

mongodb.MongoClient.connect(uri, function(err, db){

    if(err) throw err;

    //Lets add a reservation
    var reservations = db.collection('reservations');

    //insert method can take either an array or a dict
    reservations.insert(seedData, function(err, result){

            if(err) throw err;

    });



});

*/
