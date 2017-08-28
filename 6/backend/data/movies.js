var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movies');
var dbMoviesModel = mongoose.model('movies', {
  id: Number,
  title: String,
  year: String,
  description: String,
  poster: String,
  images: Array
})

module.exports = dbMoviesModel;
