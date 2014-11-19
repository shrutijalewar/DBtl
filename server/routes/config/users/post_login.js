'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Login',
    notes: 'Login a User',
    tags: ['user', 'login'],
    validate: {
        payload: {
            username: Joi.string(),
            password: Joi.string()
        }
    },
    plugins: {
      'hapi-auth-cookie': {
          redirectTo: false
      }
    },
    handler: function(request, reply){

        //login a user
        reply('OK');
    }
};
