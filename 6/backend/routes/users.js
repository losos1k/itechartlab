import express from 'express';
import * as userQueries from '../data/users';

var router = express.Router();

router.post('/register', (req, res) => {
  var user = {
    login: req.body.login,
    password: req.body.password
  }
  userQueries.createUser(user);
  res.json(user);
});

router.post('/login', (req, res) => {
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
