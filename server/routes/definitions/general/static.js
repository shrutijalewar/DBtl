'use strict';

module.exports = {
    description: 'Static Routes',
    tags:['general', 'active'],
    auth: false,
    handler: {
        directory: {
            path: __dirname + '/../../../../public'
        }
    }
};
