'use strict';

var request   = require('request').defaults({encoding: null}),
    cheerio   = require('cheerio'),
    async     = require('async'),
    //url       = require('url'),
    imagesSrc = [],
    tagSrc    = [];

request('http://www.rottentomatoes.com/', function(error, response, html){
    if (!error && response.statusCode === 200) {
        var $ = cheerio.load(html);
        $('img').each(function(){
            var image = $(this).attr('src');
            if(image && image.substring(0,4) === 'http'){
                imagesSrc.push(image);
            }
        });
        $('a').each(function(){
            var tag = $(this).attr('href');
            if (tag && tag.substring(0, 4) === 'http'){
                tagSrc.push(tag);
            }
        });
        //console.log('tags>>>>>', tagSrc);
    }

    async.map(imagesSrc, iterateImgs, function(err, images){
        console.log('images', images);
    });
});

function iterateImgs(item, cb){
    request.get(item, function(error, response, body){
        if (!error) {
            cb(null, 'data:image/png;base64, ' + new Buffer(body).toString('base64'));
        }
    });
}

