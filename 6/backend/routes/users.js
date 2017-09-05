import express from 'express';
import * as userQueries from '../data/users';

var router = express.Router();

let invalidLogin = 401;
let invalidPassword = 402;

router.post('/register', (req, res) => {
  let user = {
    login: req.body.login,
    password: req.body.password
  };
  userQueries.createUser(user);
  res.json(user);
});

router.post('/login', (req, res) => {
  userQueries.getUserByName(req.body.login, (err, user) => {
    if (!user) {
      return res.status(invalidLogin).send();
    }
    userQueries.comparePassword(req.body.password, user.password, (err, isMatch) => {
      if (isMatch) {
        return res.json(user);
      } else {
        return res.status(invalidPassword).send();
      }
    });
  })
});

export default router;
