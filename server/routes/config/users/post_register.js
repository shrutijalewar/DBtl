'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Register',
  notes: 'Register a User',
  tags: ['user', 'register'],
  validate: {
      payload: {
          username: Joi.string().min(3).required(),
          password: Joi.string().min(3).required(),
          email: Joi.string().required
      }
  },
  handler: function(request, reply){
      User.registerUser(request.payload, function(err, user){
          if(user){
              reply(user);
          }else{
              reply('There was an error');
          }
      });
  }
};