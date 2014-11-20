'use strict';

var Hapi       = require('hapi'),
    server     = new Hapi.Server('0.0.0.0', process.env.PORT),
    routes     = require('./routes/routes'),
    plugins    = require('./routes/plugins'),
    mongoose   = require('mongoose').connect(process.env.DB);

server.route(routes);
/*server.views({
    engines: {},
    basePath: __dirname,
    path: '../public'
});*/




mongoose.connection.once('open', function(){
  server.pack.register(plugins, function(){
      server.start(function(){
          server.auth.strategy('simple', 'basic', {validateFunc: require('./lib/security')});
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });
});

