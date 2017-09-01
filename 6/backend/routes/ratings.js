import express from 'express';
import dbRatingsModel from '../models/ratings';

var router = express.Router();

dbRatingsModel.getMovieById = (movieId, callback) => {
  return dbRatingsModel.find({ movieId: movieId });
}

dbRatingsModel.getExistingRating = (login, movieId, callback) => {
  return dbRatingsModel.findOne({ movieId: movieId, login: login });
}

dbRatingsModel.updateRating = (login, movieId, rating, callback) => {
  return dbRatingsModel.findOneAndUpdate({ movieId: req.body.movieId, login: req.body.login },
    { $set: { rating: rating } },
    { new: true });
}

dbRatingsModel.insertNewRating = (login, movieId, callback) => {
  return dbRatingsModel.insertMany({
    rating: req.body.rating,
    movieId: req.body.movieId,
    login: req.body.login,
  });
}

getAvg = (movieId) => {
  getMovieById(movieId, (err, doc) => {
    let arr = [];
    doc.forEach(item => {
      for (var key in item) {
        arr.push(item[key])
      }
    })
    let sum = arr.reduce((sum, curr) => sum + curr, 0);
    let avg = sum / doc.length.toFixed(2);
    console.log(doc)
    // console.log(sum)
    return avg;
  })
}

router.post('/', (req, res) => {
  getMovieById(movieId);
  res.json({ avg: avg });
});

router.post('/add', function (req, res) {
  getExistingRating(req.body.movieId, req.body.login, (err, ratings) => {
    if (ratings === null) {
      insertNewRating(req.body.rating, req.body.movieId, req.body.login, (err, result) => {
        res.json({ avg: avg });
      });
    } else {
      updateRating(req.body.movieId, req.body.login, req.body.rating, (err, result) => {
        res.json({ avg: avg });
      });
    };
  })
});

export default router;
