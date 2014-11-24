'use strict';

//var Joi = require('joi'),

var Search = require('../../../models/search'),
    Message = require('../../../models/message');

module.exports = {
    description: 'Get Dashboard',
    notes: 'Retrieves all user messages and searches',
    tags:['searches', 'messages'],
    handler: function(request, reply){
        Search.find({userId: request.auth.credentials._id}, function(err, searches){
            Message.find({toId: request.auth.credentials._id}, function(err, messages){
                reply({messages:messages, searches:searches});
            });
        });
    }
};
