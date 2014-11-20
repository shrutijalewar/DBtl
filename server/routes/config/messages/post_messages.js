'use strict';

var Joi  = require('joi'),
    Message = require('../../../models/message.js'),
    testMessage = require('../../../test_files/message_test.js');

module.exports = {
    description: 'Post a Message',
    tags:['post', 'message'],
    validate: {
        payload: {
            image: Joi.string().min(64)
        }
    },
    //auth: {
    //    mode: 'try'
    //},
    handler: function(request, reply){
        console.log(request.payload);
        Message.create(testMessage, function(err, message){
            if(err){
                console.log(err);
                reply().code(401);
            } else {
                reply(message);
            }
        });
    }
};
