import mongo from 'mongodb';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movies', {
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
