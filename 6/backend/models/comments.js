import mongo from 'mongodb';
import mongoose from 'mongoose';

var dbCommentsModel = mongoose.model('comments', {
    commentAuthor: String,
    commentDate: String,
    commentText: String,
    movieId: String
});

export default dbCommentsModel;
