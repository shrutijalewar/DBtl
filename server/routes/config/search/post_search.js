'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Post Search',
    notes: 'Post a search',
    tags: ['search', 'post'],
    handler: function(request, reply){
        //register user
        reply('OK');
    }
};
