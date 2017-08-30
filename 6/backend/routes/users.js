import express from 'express';
import passport from 'passport';
import dbUsersModel from '../data/users';

var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

router.post('/register', function (req, res) {
  var login = req.body.login;
  var password = req.body.password;

  var newUser = new dbUsersModel({
    login: login,
    password: password
  })

  dbUsersModel.createUser(newUser, function (err, user) {
    if (err) throw err;
  })

  res.json(newUser);
});

passport.use(new LocalStrategy(
  function (login, password, done) {
    dbUsersModel.getUserById(login, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false);
      }

      dbUsersModel.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password.' })
        }
      });
    });
  }));

router.post('/login', function (req, res) {
  passport.authenticate('local');
  dbUsersModel.findOne({ login: req.body.login }, function (err, user) {
    if (err) throw err;
    res.send(user);
  })
  // res.json(user);
});

export default router;
