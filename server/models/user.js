'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,

    username: {
        type: String,
        unique: true,
        required: true
    },

    email: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    salt: {
        type: String,
        required: true
    }

});
UserSchema.statics.findByEmail = function(email, cb) {
    var User = this || mongoose.model('User');
    User.findOne({email: email}, cb);
};

UserSchema.methods.findSameName = function(cb) {
    return this.model('User').find({name: this.name}, cb);
};

mongoose.model('User', UserSchema);

var User = mongoose.model('User');

User.findByEmail('test@test.com', function(err, user) {
    if(user) {
        user.findSameName(function(err, users) {
            // do something
        });
    }
});
module.exports = mongoose.model('User', {
                                          username: {},
                                          password: {},
                                          images:   {}
                                        });