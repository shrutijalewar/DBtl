'use strict';

//var Joi = require('joi'),

var Search = require('../../../models/search'),
    Message = require('../../../models/message'),
    userId = '000000000000000000000001';

module.exports = {
    description: 'All Searches',
    notes: 'All Searches',
    tags:['searches'],
    handler: function(request, reply){
        Search.find(function(err, searches){
            reply({searches:searches});

        });
    }
};

module.exports = {
    description: 'All Messages',
    notes: 'All Messages',
    tags:['get','messages'],
    handler: function(request, reply){
        Message.find({toId: userId}, function(err, messages){
            reply({messages:messages});
        });
    }
};
