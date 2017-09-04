import express from 'express';
import passport from 'passport';
import dbUsersModel from '../models/users';
import bcrypt from 'bcryptjs';

var LocalStrategy = require('passport-local').Strategy;

export let createUser = (user, callback) => {
  var newUser = new dbUsersModel(user);

  dbUsersModel.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  };

  dbUsersModel.createUser(newUser, callback);
}

export let getUserByName = (login, callback) => {
  return dbUsersModel.findOne({ login: login }, callback)
}

export let comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) {
      throw err;
    }

    callback(null, isMatch);
  });
}
