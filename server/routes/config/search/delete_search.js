'use strict';

var Joi = require('joi'),
    Search = require('../../../models/search.js');

module.exports = {
    description: 'Delete Search',
    notes: 'Delete a search',
    tags: ['search', 'delete'],
    validate: {
        params: {
            id: Joi.string().length(24).required()
        }
    },
    handler: function(request, reply){
        Search.findByIdAndRemove(request.params.id, function(err, task){
            reply(task);
        });
    }
};

