'use strict';

var //Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Put to Profile',
    notes: 'Edit user profile',
    tags: ['user', 'profile'],
    handler: function(request, reply){
        User.update({_id: request.auth.credentials._id}, {$set: {profilePic: request.payload.profilePic}}, function(err, user){
            reply(user);
        });
    }
};

