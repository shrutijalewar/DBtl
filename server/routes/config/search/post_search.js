'use strict';

var Joi  = require('joi'),
    testSearch = require('../../../test_files/search_test.js'),
    Search = require('../../../models/search.js');
    //auth = 'b000000000000000000000001';

module.exports = {
    description: 'Post a Search',
    tags:['post', 'search'],
    validate: {
        payload: {
            url: Joi.string().regex(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/).required(),
            depth: Joi.number().max(3).required()
        }
    },
    //auth: {
    //    mode: 'try'
    //},
    handler: function(request, reply){
        //var search = new Search(request.payload);
        //search.crawl(payload.url, payload.depth, [], 0, function(err, results){
            console.log(request.payload);
            testSearch.userId = '000000000000000000000001';
            Search.create(testSearch, function(err, search){
               if(err){
                   console.log(err);
                   reply().code(401);
               } else {
                   reply(search);
               }
            });
        //});
    }
};

