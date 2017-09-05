import express from 'express';
import * as ratingQueries from '../data/ratings';

var router = express.Router();

router.post('/', (req, res) => {
  let rating = {
    movieId: req.body.movieId,
  };
  ratingQueries.getAverageRating(rating)
    .then(avg => res.send({ avg: avg }));
});

router.post('/add', (req, res) => {
  let rating = {
    rating: req.body.rating,
    movieId: req.body.movieId,
    login: req.body.login
  };
  ratingQueries.getExistingRating(rating)
    .then(ratings => {
      if (ratings.length === 0) {
        ratingQueries.insertNewRating(rating)
          .then(result => ratingQueries.getAverageRating(rating)
            .then(avg => res.send({ avg: avg })));
      } else {
        ratingQueries.updateRating(rating)
          .then(result => ratingQueries.getAverageRating(rating)
            .then(avg => res.send({ avg: avg })));
      };
    });
});

export default router;
