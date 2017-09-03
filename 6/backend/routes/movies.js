import express from 'express';
import dbMoviesModel from '../models/movies';

var router = express.Router();

let getMovies = () => {
  return dbMoviesModel.find().exec();
};

router.get('/', (req, res) => {
  getMovies()
    .then(movies => res.send(movies));
});

export default router;
