var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoose = require('mongoose');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

mongoose.connect('mongodb://localhost:27017/movies');
mongoose.model('movies', {
  id: Number,
  title: String,
  year: String,
  description: String,
  poster: String,
  images: Array
})

router.get('/movies', function (req, res, next) {
  mongoose.model('movies').find(function (err, movies) {
    res.send(movies);
  });
});

module.exports = router;
