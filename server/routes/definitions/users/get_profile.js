'use strict';

//var Joi = require('joi'),
//    User = require('../../../models/user');

module.exports = {
    description: 'Get Profile',
    notes: 'Show user profile',
    tags: ['user', 'profile'],
    handler: function(request, reply){
        reply('OK');
    }
};
