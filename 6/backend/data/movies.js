import dbMoviesModel from '../models/movies';

export let getMovies = () => {
  return dbMoviesModel.find().exec();
};
