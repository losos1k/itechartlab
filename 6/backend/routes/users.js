import express from 'express';
import passport from 'passport';
import dbUsersModel from '../data/users';

var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

router.get('/', function (req, res) {
  res.send('users')
});

router.post('/', function (req, res) {
  var login = req.body.login;
  var password = req.body.password;

  var newUser = new dbUsersModel({
    login: login,
    password: password
  })

  dbUsersModel.createUser(newUser, function (err, user) {
    if (err) throw err;
    console.log(user);
  })
});

export default router;
