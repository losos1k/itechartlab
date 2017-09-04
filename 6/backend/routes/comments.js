import express from 'express';
import { getCommentsByMovieId, insertNewComment } from '../data/comments';

var router = express.Router();

router.post('/', (req, res) => {
  let comment = {
    movieId: req.body.movieId
  }
  getCommentsByMovieId(comment)
    .then(comments => res.json(comments));
});

router.post('/add', (req, res) => {
  let comment = {
    commentAuthor: req.body.commentAuthor,
    commentDate: req.body.commentDate,
    commentText: req.body.commentText,
    movieId: req.body.movieId
  }
  insertNewComment(comment)
    .then(comments => res.json(comments));
});

export default router;
