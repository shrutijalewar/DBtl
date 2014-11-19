'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Slideshow',
    notes: 'Show image slideshow',
    tags: ['slideshow'],
    handler: function(request, reply){
        //register user
        reply('OK');
    }
};