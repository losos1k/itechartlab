import dbCommentsModel from '../models/comments';

export let getCommentsByMovieId = (comment) => {
  return dbCommentsModel.find({ movieId: comment.movieId }).exec();
};

export let insertNewComment = (comment) => {
  return dbCommentsModel.insertMany(comment);
};
