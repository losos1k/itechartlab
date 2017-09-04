import dbRatingsModel from '../models/ratings';

export let getRatingsByMovieById = (rating) => {
  return dbRatingsModel.find({ movieId: rating.movieId }).exec();
};

export let getExistingRating = (rating) => {
  return dbRatingsModel.find({ movieId: rating.movieId, login: rating.login }).exec();
};

export let updateRating = (rating) => {
  return dbRatingsModel.findOneAndUpdate({ movieId: rating.movieId, login: rating.login },
    { $set: { rating: rating.rating } },
    { new: true }).exec();
};

export let insertNewRating = (rating) => {
  return dbRatingsModel.insertMany(rating, { new: true });
};

export let getAverageRating = (rating) => {
  return getRatingsByMovieById(rating)
    .then(doc => {
      if (doc.length === 0) {
        return 0;
      } else {
        let arr = [];
        let sum = 0;
        for (let i = 0; i < doc.length; i++) {
          sum += doc[i].rating;
        }
        let avg = Math.round((sum / doc.length) * 100) / 100;
        return avg;
      }
    });
};
