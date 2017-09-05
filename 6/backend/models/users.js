import mongo from 'mongodb';
import mongoose from 'mongoose';

var dbUsersModel = mongoose.model('users', {
    login: String,
    password: String
});

export default dbUsersModel;
