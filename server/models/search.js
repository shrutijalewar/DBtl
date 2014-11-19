'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Search', {
                                            seed:   {},
                                            depth:  {},
                                            urls:   {},
                                            imgs:   {},
                                            userId: {}
                                          });
