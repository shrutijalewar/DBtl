'use strict';

var mongoose     = require('mongoose'),
    request      = require('request').defaults({encoding: null}),
    cheerio      = require('cheerio'),
    async        = require('async'),
    _            = require('underscore'),
    imgCount        = null,
    url          = require('url'),
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

SearchSchema.statics.crawl = function(urls, imgs, index, length, depth, cb){
    imgCount = 0;
    console.log('index', index, 'length', length, 'depth', depth);
    console.log('length', urls.length);

    request(urls[index], function(error, response, html){
        // request errors out around index 100...how to slow down the requests?
        if (!error && response.statusCode === 200) {
            var $ = cheerio.load(html);

            $('img').each(function(){
                imgCount ++;
                var image = $(this).attr('src');

                if(image && image.substring(0,4) === 'http'){
                    imgs.push(image);
                }

                imgs = _.uniq(imgs);
            });

            if (depth - 1 > 0/* && urls.length < 80*/) { //limit of 80 due to machine processing power
                $('a').each(function(){
                    var tag = $(this).attr('href');
                    if (tag && tag.substring(0, 4) === 'http') {
                        tag = url.parse(tag);
                        urls.push(tag.protocol + '//' + tag.hostname);
                    }

                    urls = _.uniq(urls);
                });
            }
        }

        urls = makeUrlObj(urls, index, depth, imgCount);

        if(index === length - 1 && depth > 1){
            SearchSchema.statics.crawl(urls, imgs, index + 1, urls.length, depth - 1, cb);
        }

        if(index < length - 1){
            SearchSchema.statics.crawl(urls, imgs, index + 1, length, depth, cb);
        }

        if(index === length - 1 && depth - 1 === 0){
            //console.log('mapping images');
            //var q = async.queue(function(item, callback){
            //    var self = this;
            //    request(item, function(error, response, body){
            //        if (!error) {
            //            self.push('data:image/png;base64, ' + new Buffer(body).toString('base64'));
            //        }
            //        callback(self);
            //    });
            //}.bind(imgs64), 10);
            //q.push(imgs);
            //q.drain = function(){
            //    console.log('queue', q.length());
                cb(null, {'urls': urls, 'imgs': imgs});
            //}
        }
    });

};

var Search = mongoose.model('Search', SearchSchema);
module.exports = Search;


function makeUrlObj(urls, index, depth, imgCount){
    var urlObj = {
                url: urls[index],
                imgs: imgCount,
                depth:depth
              };

    urls.splice(index, 1, urlObj);
    return urls;
}

//function iterateImgs(item, callback){
//    request.get(item, function(error, response, body){
//
//        if (!error) {
//            item = 'data:image/png;base64, ' + new Buffer(body).toString('base64');
    //    }
    //    callback(item);
    //});
//}
