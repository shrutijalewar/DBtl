'use strict';

var mongoose = require('mongoose'),
    MessageSchema = null;

MessageSchema = new mongoose.Schema({
    toId: {type:mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true},
    frId: {type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true},
    body: {type: String,required: true},
    image: {type: String, required: true}
});


var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
