import mongo from 'mongodb';
import mongoose from 'mongoose';

var dbRatingsModel = mongoose.model('ratings', {
    rating: Number,
    movieId: String,
    login: String,
});

export default dbRatingsModel;
