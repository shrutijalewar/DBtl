'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Register',
    notes: 'Register a User',
    tags: ['user', 'register'],
    handler: function(request, reply){
        //register user
        reply('OK');
    }
};