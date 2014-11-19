/**
 * Created by PlaceFields on 11/19/14.
 */

'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Profile',
    notes: 'Create Profile',
    tags: ['user', 'profile'],
    handler: function(request, reply){
        //register user
        reply('OK');
    }
};