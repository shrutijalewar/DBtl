'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Message', {
                                             toId:   {},
                                             frId:   {},
                                             body:   {},
                                             img:    {},
                                             isRead: {}
                                            });
