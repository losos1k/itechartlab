import mongo from 'mongodb';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users', {
    useMongoClient: true,
});

var dbUsersModel = module.exports = mongoose.model('users', {
    login: String,
    password: String
});

module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};
