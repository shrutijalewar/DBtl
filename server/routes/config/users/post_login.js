'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Login',
    notes: 'Login a User',
    tags: ['user', 'login'],
    validate: {
        payload: {
            username: Joi.string().min(3).required(),
            password: Joi.string().min(3).required(),
            email: Joi.string().required
        }
    },
    handler: function(request, reply){
        //login a user
        reply('OK');
    }
};