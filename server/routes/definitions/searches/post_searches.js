'use strict';

var Joi  = require('joi'),
    Search = require('../../../models/search.js');

module.exports = {
    description: 'Post a Search',
    validate: {
        payload: {
            url: Joi.string().regex(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/).required(),
            depth: Joi.number().max(4).required()
        }
    },
    handler: function(request, reply){

        console.log('payload', request.payload);
        console.log('search');

        Search.crawl([request.payload.url], [], 0, 1, request.payload.depth, function(err, result){
            result.userId = request.auth.credentials._id;
            console.log('saving to db');
            Search.create(result, function(err, search){
                if(err){
                    console.log(err);
                    reply().code(401);
                } else {
                    reply(search);
                }
            });
        });
    }
};

