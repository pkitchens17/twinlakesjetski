var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var reservations = require('./routes/reservations');

var mongoose = require('mongoose');


var configDB = require('./config/database.js');
var db = mongoose.connect(configDB.url);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//code for getting ejs files for links
//reservation page
app.get('/reservations', function(req, res) {
  res.render('reservations.ejs');
})

app.use('/', index);
app.use('/reservations', reservations);

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
