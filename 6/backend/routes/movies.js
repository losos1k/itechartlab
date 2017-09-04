import express from 'express';
import { getMovies } from '../data/movies';

var router = express.Router();

router.get('/', (req, res) => {
  getMovies()
    .then(movies => res.send(movies));
});

export default router;
