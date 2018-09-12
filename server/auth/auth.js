const passport = require('passport');
const session = require('express-session');
const EveOnlineSsoStrategy = require('passport-eveonline-sso');


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({msg: 'Must be logged in'});
}

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  console.log('Deerializing user ', obj);
  done(null, obj);
});

passport.use(new EveOnlineSsoStrategy({
    clientID: process.env.ESI_CLIENT_ID,
    clientSecret: process.env.ESI_CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/callback',
    scope: 'publicData esi-location.read_location.v1 esi-location.read_ship_type.v1 esi-skills.read_skills.v1 esi-skills.read_skillqueue.v1 esi-assets.read_assets.v1 esi-fittings.read_fittings.v1 esi-fittings.write_fittings.v1 esi-characterstats.read.v1'
  },
  function (accessToken, refreshToken, profile, done) {
    // We have a new authed session, you can now store and/or use the accessToken
    // and refreshToken to call EVE Swagger Interface (ESI) end points
    return done(null, {accessToken, profile});
  }
));


function init(app) {
  app.use(session({secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true, cookie: {secure: false}}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/auth/login', passport.authenticate('eveonline-sso'));
  app.get('/auth/callback', passport.authenticate('eveonline-sso', {failureRedirect: '/error'}),
    function (req, res) {
      const from = req.query['state'];
      console.log('Query params from callback', req.query);
      if (from) {
        res.redirect(from);
      } else {
        res.redirect('/');
      }
    });
  app.get('/auth/user', ensureAuthenticated, (req, res) => {
    res.json(req.user);
  });
}

module.exports = {
  init,
  ensureAuthenticated,
};
