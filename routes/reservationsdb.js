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
      boatID      :  { type: String, lowercase:true},
      startTime   : String,
      endTime     : String,
      startDate   : String,
      endDate     : String,
      tube        : Boolean,
      cost        : String,
      firstName   : { type: String, lowercase:true},
      lastName    : { type: String, lowercase:true},
      phoneNumber : String,
      email       :  { type: String, lowercase:true},

    },

    boats :{
      boatID    : String,
      boatType  :  { type: String, lowercase:true},
      location  :  { type: String, lowercase:true},
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
