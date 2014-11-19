'use strict';

module.exports = {
  description: 'Home',
    notes:     'The Home Page',
    tags:      ['home'],
    handler: function(request, reply){
      reply.view('index.html');
    }
};


