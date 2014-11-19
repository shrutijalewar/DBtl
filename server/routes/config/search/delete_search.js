'use strict';

var Joi = require('joi'),
    User = require('../../../models/user');

module.exports = {
    description: 'Delete Search',
    notes: 'Delete a search',
    tags: ['search', 'delete'],
    handler: function(request, reply){
        //register user
        reply('OK');
    }
};