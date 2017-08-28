import mongo from 'mongodb';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/movies', {
  useMongoClient: true,
});
var dbMoviesModel = mongoose.model('movies', {
  id: Number,
  title: String,
  year: String,
  description: String,
  poster: String,
  images: Array
})

export default dbMoviesModel;
