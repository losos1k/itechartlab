import express from 'express';
import dbUsersModel from '../models/users';
import bcrypt from 'bcryptjs';

export let createUser = (user, callback) => {
  var newUser = new dbUsersModel(user);

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

export let getUserByName = (login, callback) => {
  return dbUsersModel.findOne({ login: login }, callback)
};

export let comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) {
      throw err;
    }

    callback(null, isMatch);
  });
};
