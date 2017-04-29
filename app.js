var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var port     = process.env.PORT || 8080;
var flash = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session      = require('express-session');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var index = require('./routes/index');
var reservations = require('./routes/reservation');


var app = express();

var mongoose = require('mongoose');

//Pulling in the database url from /config/database.js
var configDB = require('./config/database.js');
var db = mongoose.connect(configDB.url);




// view engine setup

app.set('views', path.join(__dirname, '/public/views'));
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});


app.use(express.static(path.join(__dirname, '/public')));


app.use('/', index);
app.use('/reservation', reservations);




//Passport script
app.use(session({
  secret: 'twinlakesjetski',
  resave: true,
  saveUninitialized: true
 })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/adminRoute.js')(app, passport);


app.listen(port);




    require('./routes/passport')(passport); // pass passport for configuration



    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

//-----------------------------------------------------------------------------------------------------


// these allow linking to the css pages and whatever else
app.use('/js', express.static(__dirname + '/node_modules/materialize-css/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/materialize-css/dist/css'));
app.use('/jsq', express.static(__dirname + '/node_modules/jquery/dist'));
app.use("/pat", express.static(__dirname +'/node_modules/pickadate/lib'));
app.use(express.static(__dirname + '/public/style'));
app.use(express.static(__dirname + '/public/images'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
