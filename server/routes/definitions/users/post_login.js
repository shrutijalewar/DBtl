'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Login',
    notes: 'Login a User',
    tags: ['user', 'login'],
    validate: {
        payload: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    },
    auth: {
        mode: 'try'
    },
    handler: function(request, reply){
        User.login(request.payload, function(user){
           if(user){
               request.auth.session.set(user);
               reply();
           }else{
               reply().code(401);
           }
        });

    }
};
