import express from 'express';
import dbRatingsModel from '../models/ratings';

var router = express.Router();

router.post('/', function (req, res) {
  dbCommentsModel.find({ movieId: req.body.movieId },
    function (err, comments) {
      res.send(comments);
    });
});

router.post('/add', function (req, res) {
  dbCommentsModel.insertMany({
    commentAuthor: req.body.commentAuthor,
    commentDate: req.body.commentDate,
    commentText: req.body.commentText,
    movieId: req.body.movieId,
  },
    function (err, comments) {
      res.json(comments);
    });
});

export default router;
