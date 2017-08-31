import mongo from 'mongodb';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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

module.exports.getUserByName = function (login, callback) {
    return dbUsersModel.findOne({ login: login }, callback)
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}
