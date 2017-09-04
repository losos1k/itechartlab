import express from 'express';
import passport from 'passport';
import dbUsersModel from '../models/users';
import bcrypt from 'bcryptjs';

var LocalStrategy = require('passport-local').Strategy;

export default dbUsersModel.createUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

export let getUserByName = (login, callback) => {
  return dbUsersModel.findOne({ login: login }, callback)
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
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

    dbUsersModel.comparePassword(password, user.password, (err, isMatch) => {
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false)
      }
    });
  });
}));
