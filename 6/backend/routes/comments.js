import express from 'express';
import dbCommentsModel from '../models/comments';

var router = express.Router();

let getCommentsByMovieId = (movieId) => {
  return dbCommentsModel.find({ movieId: movieId }).exec();
};

let insertNewComment = (commentAuthor, commentDate, commentText, movieId) => {
  return dbCommentsModel.insertMany({
    commentAuthor: commentAuthor,
    commentDate: commentDate,
    commentText: commentText,
    movieId: movieId,
  })
};

router.post('/', (req, res) => {
  getCommentsByMovieId(req.body.movieId)
    .then(comments => res.json(comments));
});

router.post('/add', (req, res) => {
  insertNewComment(req.body.commentAuthor, req.body.commentDate, req.body.commentText, req.body.movieId)
    .then(comments => res.json(comments));
});

export default router;
