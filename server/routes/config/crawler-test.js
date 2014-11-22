'use strict';

var Search  = require('../../models/search'),
    s       = null,
    async   = require('async');

s = {urls: ['http://windowworld.com'], imgs: [], depth: 3, userId: '000000000000000000000001'};

//Search.crawl(s.urls, s.imgs, 0, 3, function(err, search){
    //console.log('search', search);
//});

Search.crawl(s.urls, [], 0, 1, s.depth, function(err, search){
    console.log('error', err);
    console.log('final result', search);
});
