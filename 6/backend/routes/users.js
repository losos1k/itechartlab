import express from 'express';
import passport from 'passport';
import dbUsersModel from '../models/users';
import bcrypt from 'bcryptjs';

var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

dbUsersModel.createUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

let getUserByName = (login, callback) => {
  return dbUsersModel.findOne({ login: login }, callback)
}

dbUsersModel.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) {
      throw err;
    }
    callback(null, isMatch);
  });
}

passport.use(new LocalStrategy((login, password, done) => {
  getUserByName(login, (err, user) => {
    if (!user) {
      return done(null, false);
    }

    comparePassword(password, user.password, (err, isMatch) => {
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false)
      }
    });
  });
}));

router.post('/register', (req, res) => {
  var newUser = new dbUsersModel({ login: req.body.login, password: req.body.password })
  dbUsersModel.createUser(newUser);
  res.json(newUser);
});

router.post('/login', (req, res) => {
  passport.authenticate('local');
  getUserByName(req.body.login, (err, user) => {
    if (!user) {
      return res.status(401).send();
    }
    dbUsersModel.comparePassword(req.body.password, user.password, (err, isMatch) => {
      if (isMatch) {
        return res.json(user);
      } else {
        return res.status(402).send();
      }
    });
  })
});

export default router;
