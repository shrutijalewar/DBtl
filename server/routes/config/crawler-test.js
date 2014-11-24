'use strict';

var Search   = require('../../models/search'),
    mongoose = require('mongoose'),
    request  = {};

request.auth = {};
request.auth.credentials = {};
request.auth.credentials._id = mongoose.Types.ObjectId('546d1c91c4f9f2a15a5655a3');
request.payload = {url: 'http://windowworld.com', depth: 3};

Search.crawl([request.payload.url], [], 0, 1, request.payload.depth, function(err, result){
    result.userId = request.auth.credentials._id;
    console.log('saving to db');
    Search.create(result, function(err, search){
        console.log('error', err);
        console.log('saved search: ', search);
    });
});

Search.create({urls: ['a'], imgs: ['jpg'], userId: request.auth.credentials._id}, function(err, search){
    console.log('error', err);
    console.log('search', search);
});
