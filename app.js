var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./server/routes/index');
var fit = require('./server/routes/fit');
var passport = require('passport');
var OAuth2Strategy = require('passport-oauth2');
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
app.use(express.static(path.join(__dirname, 'static')));

app.use(passport.initialize());
passport.use(new OAuth2Strategy({
    authorizationURL: 'https://login.eveonline.com/oauth/authorize?scope=esi-location.read_location.v1',
    tokenURL: 'https://https://login.eveonline.com/oauth/token',
    clientID: '<CLIENT_ID>',
    clientSecret: '<CLIENT_SECRET>',
    callbackURL: "http://localhost:3000/auth/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('', accessToken, refreshToken, profile);
    return cb(null, '');
  }
));

app.use('/', routes);
app.use('/fit', fit);
app.use('/login', passport.authenticate('oauth2'));

app.get('/auth/callback', passport.authenticate('oauth2', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
