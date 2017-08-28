var express = require('express');
var router = express.Router();
var dbMoviesModel = require('../data/movies');

router.get('/', function (req, res, next) {
  dbMoviesModel.find(function (err, movies) {
    res.send(movies);
  });
});

module.exports = router;
