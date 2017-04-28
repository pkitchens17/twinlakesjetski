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
    //  endDate     : String,
      tube        : Boolean,
      cost        : String,
      firstName   : { type: String, lowercase:true},
      lastName    : { type: String, lowercase:true},
      phoneNumber : String,
      email       :  { type: String, lowercase:true},
      location    :  { type: String, lowercase:true},
      resid       :   {type: String}

    },

});



module.exports = mongoose.model('reservations', reservationsSchema);
