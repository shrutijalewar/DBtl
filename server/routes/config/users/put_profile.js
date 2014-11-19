'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Put to Profile',
    notes: 'Edit user profile',
    tags: ['user', 'profile'],
    handler: function(request, reply){
        //register user
        reply('OK');
    }
};