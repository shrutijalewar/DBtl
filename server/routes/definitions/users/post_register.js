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
          username: Joi.string().min(3).max(15).required()
      }
  },
    auth: {
        mode: 'try'
    },
  handler: function(request, reply){
      var user = new User(request.payload);
      user.encrypt();
      user.save(function(err){
          reply().code(err ? 401 : 200);
      });
  }
};


