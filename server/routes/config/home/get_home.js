'use strict';

module.exports = {
  description: 'Home',
    notes:     'The Home Page',
    tags:      ['home'],
  auth: 'session',
    handler: function(request, reply){
        reply({data: 'Home Page'});
    }
};
