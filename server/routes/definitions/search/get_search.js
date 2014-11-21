'use strict';

//var Joi = require('joi'),

var Search = require('../../../models/search');
    //userId = '000000000000000000000001';

module.exports = {
    description: 'Get One Search',
    notes: 'A Search',
    tags:['searches'],
    handler: function(request, reply){
        //Search.find(function(err, searches){
        //    reply({searches:searches});
        //});
        reply();
    }
};
