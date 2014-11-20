'use strict';

var Hapi       = require('hapi'),
    server     = new Hapi.Server(process.env.PORT),
    routes     = require('./routes/config/routes'),
    plugins    = require('./routes/config/plugins'),
    authentication = require('./routes/config/authentication'),
    mongoose   = require('mongoose').connect(process.env.DB);

mongoose.connection.once('open', function(){
  server.pack.register(plugins, function(){
      server.auth.strategy('simple', 'cookie', true, authentication);
      server.route(routes);
      server.start(function(){
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });
});


