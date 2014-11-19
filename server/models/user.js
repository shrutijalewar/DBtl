'use strict';

var mongoose   = require('mongoose'),
     Bcrypt    = require('bcrypt'),
    Schema =  mongoose.Schema,
    UserSchema = new Schema({email: String, password: String}),
    User       = mongoose.model('User', UserSchema);

User.register  = function(obj, cb){
    this.findOne({email: obj.email}, function(err, user){
        if(user || obj.password.length < 3 || err){return cb(err);}
        obj.password = Bcrypt.hashSync(obj.password, 10);
        user =new User(obj);
        user.save(function(err){
            cb(err, user);
        });
    });
};

module.exports = User;

