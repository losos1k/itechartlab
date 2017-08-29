import express from 'express';
import dbMoviesModel from '../data/movies';

var router = express.Router();

router.get('/', function (req, res) {
  dbMoviesModel.find(function (err, movies) {
    res.send(movies);
  });
});

export default router;
