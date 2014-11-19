'use strict';

var Bcrypt = require('bcrypt'),
    User   = require('../models/user');

module.exports  = function(email, password, callback){
    User.findOne({email:email}, function(err, user){
        if(!user){
            return callback(null, false);
        }

        Bcrypt.compare(password, user.password, function(err, isValid){

        callback(err, isValid, {id: user._id, name: user.name});

        });
    });
};
