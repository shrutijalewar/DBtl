'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Register',
  notes: 'Register a User',
  tags: ['user', 'register'],
  validate: {
      payload: {
          password: Joi.string().min(3).required(),
          email: Joi.string().required()
      }
  },
  handler: function(request, reply){
      User.register(request.payload, function(err, user){
              reply(user);
          });
  }
};

