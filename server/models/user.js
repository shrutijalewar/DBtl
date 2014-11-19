'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
                                          username: {},
                                          password: {},
                                          images:   {}
                                        });
