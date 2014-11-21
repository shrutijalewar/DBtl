'use strict';

var Hapi       = require('hapi'),
    server     = new Hapi.Server('localhost', process.env.PORT),
    routes     = require('./routes/routes'),
    plugins    = require('./routes/plugins'),
    mongoose   = require('mongoose').connect(process.env.DB);


mongoose.connection.once('open', function(){
  server.pack.register(plugins, function(){
    server.route(routes);
    server.auth.strategy('simple', 'basic', {validateFunc: require('./lib/security')});
    server.start(function(){
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });
});


