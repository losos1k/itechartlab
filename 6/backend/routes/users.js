import express from 'express';
import passport from 'passport';
import dbUsersModel from '../models/users';
import * as userQueries from '../data/users';

var router = express.Router();

router.post('/register', (req, res) => {
  var newUser = new dbUsersModel({ login: req.body.login, password: req.body.password });
  dbUsersModel.createUser(newUser);
  res.json(newUser);
});

router.post('/login', (req, res) => {
  passport.authenticate('local');
  userQueries.getUserByName(req.body.login, (err, user) => {
    if (!user) {
      return res.status(401).send();
    }
    userQueries.comparePassword(req.body.password, user.password, (err, isMatch) => {
      if (isMatch) {
        return res.json(user);
      } else {
        return res.status(402).send();
      }
    });
  })
});

export default router;
