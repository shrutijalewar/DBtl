'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    username: {type: String,    unique: true,   required: true},
    email: {type: String,       unique: true,   required: true},
    password: {type: String,    required: true},
    salt: {type: String,        required: true}
});

UserSchema.statics.resisterUser = function(obj, cb) {
    var User = this || mongoose.model('User');
    User.findOne({email: email}, cb);
};
UserSchema.statics.login = function (request, reply) {

    if (request.auth.isAuthenticated) {
        return reply.redirect('/');
    }

    var message = '';
    var account = null;

        if (!request.payload.username || !request.payload.password) {

            message = 'Missing username or password';
        }
        else {
            account = users[request.payload.username];
            if (!account ||
                account.password !== request.payload.password) {

                message = 'Invalid username or password';
            }
        }
};

    //UserSchema.methods.findSameName = function (cb) {
        //return this.model('User').find({name: this.name}, cb);
    //};
UserSchema.statics.logout = function (request, reply) {

    request.auth.session.clear();
    return reply.redirect('/');
};

//mongoose.model('User', UserSchema);

//var User = mongoose.model('User');

/*User.findByEmail('test@test.com', function(err, user) {
    if(user) {
        user.findSameName(function(err, users) {
            // do something
        });
    }
});*/
module.exports = mongoose.model('User', UserSchema);
