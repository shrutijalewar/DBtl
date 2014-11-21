'use strict';

var Search  = require('../../models/search'),
    s       = null;

s = {urls: ['http://cnn.com'], imgs: [], userId: '000000000000000000000001'};

//Search.crawl(s.urls, s.imgs, 0, 3, function(err, search){
    //console.log('search', search);
//});

Search.crawlUrls(s.urls, 0, 3, function(err, search){
    console.log(search);
});
