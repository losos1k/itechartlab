import express from 'express';
import dbRatingsModel from '../models/ratings';

var router = express.Router();

let getMovieById = (movieId) => {
  return dbRatingsModel.find({ movieId: movieId }).exec();
};

let getExistingRating = (movieId, login) => {
  return dbRatingsModel.find({ movieId: movieId, login: login }).exec();
};

let updateRating = (movieId, login, rating) => {
  return dbRatingsModel.findOneAndUpdate({ movieId: movieId, login: login }, { $set: { rating: rating } }, { new: true }).exec();
};

let insertNewRating = (rating, movieId, login) => {
  return dbRatingsModel.insertMany({ rating: rating, movieId: movieId, login: login }, { new: true });
};

let getAvg = (movieId) => {
  return Promise.resolve(getMovieById(movieId)
    .then(doc => {
      if (doc.length === 0) {
        return 0;
      } else {
        let arr = [];
        for (let i = 0; i < doc.length; i++) {
          for (let key in doc[i]) {
            if (key === 'rating') {
              arr.push(doc[i][key]);
            }
          }
        }
        let sum = arr.reduce((sum, curr) => sum + curr, 0);
        let avg = +(sum / doc.length).toFixed(2);
        return avg;
      }
    }));
};

router.post('/', (req, res) => {
  getAvg(req.body.movieId)
    .then(avg => res.send({ avg: avg }));
});

router.post('/add', (req, res) => {
  getExistingRating(req.body.movieId, req.body.login)
    .then(ratings => {
      if (ratings.length === 0) {
        insertNewRating(req.body.rating, req.body.movieId, req.body.login)
          .then(result => getAvg(req.body.movieId)
            .then(avg => res.send({ avg: avg })));
      } else {
        updateRating(req.body.movieId, req.body.login, req.body.rating)
          .then(result => getAvg(req.body.movieId)
            .then(avg => res.send({ avg: avg })));
      };
    });
});

export default router;
