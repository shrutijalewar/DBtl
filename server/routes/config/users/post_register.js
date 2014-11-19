'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Register',
  notes: 'Register a User',
  tags: ['user', 'register'],
  validate: {
      payload: {
          username: Joi.string(),
          password: Joi.string()
      }
  },
  handler: function(request, reply){
      //register user
      reply('OK');
  }
};
