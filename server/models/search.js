'use strict';

var mongoose  = require('mongoose'),
    request   = require('request').defaults({encoding: null}),
    cheerio   = require('cheerio'),
    async     = require('async'),
    //url     = require('url'),
    tagSrc    = [],
    SearchSchema = null;

 //Schema definition
    SearchSchema = new mongoose.Schema({
    urls: {type: Array, required: true},
    imgs: {type: Array, required: true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

SearchSchema.statics.crawl = function(urls, imgs, index, depth, cb){
    //console.log(urls, imgs, index, depth);
    request(urls[0], function(error, response, html){
        if (!error && response.statusCode === 200) {
            var $ = cheerio.load(html);
            $('img').each(function(){
                var image = $(this).attr('src');
                if(image && image.substring(0,4) === 'http'){
                    imgs.push(image);
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
        //console.log(imgs);
        async.map(imgs, iterateImgs, function(err, images){
            //console.log('images', images);
            //console.log('map', urls, images, index, depth);
            cb(null, {urls: urls, imgs: images, index: index, depth: depth});
        });
    });
};

var Search = mongoose.model('Search', SearchSchema);
module.exports = Search;

function iterateImgs(item, cb){
    request.get(item, function(error, response, body){
        if (!error) {
            cb(null, 'data:image/png;base64, ' + new Buffer(body).toString('base64'));
        }
    });
}

//------------------------ NOTES -------------------------//
/*
 * crawl (urls, imgs, index, depth, cb)
 *   decrement depth
 *
 *   find all images and push to end of imgs
 *       select
 *       parse
 *       convert
 *       push
 *
 *   if depth > 0
 *      find all links on the page
 *      massage links: {url: name, imgs: null}
 *      splice into array after current index
 *
 *   if index < urls.length - 1
 *   loop array from index to length - 1
 *       crawl (urls, imgs, index, dept decrement deloop array from index to length - 1*crawl (urls, imgs, index, dept decrement deloop array from index to length - 1*crawl (urls, imgs, index, dept decrement deloop array from index to length - 1*crawl (urls, imgs, index, dept decrement deloop array from index to length - 1*crawl (urls, imgs, index, dept decrement deloop array from index to length - 1*crawl (urls, imgs, index, dept decrement deloop array from index to length - 1*crawl (urls, imgs, index, dept decrement deloop array from index to length - 1*crawl (urls, imgs, index, depth - 1)
 *       push url and photo number and depths onto links array
 *
 *   if index === urls.length && depth === 0
 *       execute final callback({urls, imgs})
 */
