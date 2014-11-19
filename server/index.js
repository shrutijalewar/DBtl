'use strict';

var Hapi       = require('hapi'),
    server     = new Hapi.Server(),
    routes     = require('./routes/routes'),
    plugins    = require('./routes/plugins'),
    mongoose   = require('mongoose').connect(process.env.DB);

server.connection({port:process.env.PORT});
server.route(routes);

server.on('log', function(event, tags){
    console.log(event.tags, event.data);
});

mongoose.connection.once('open', function(){
  server.register(plugins, function(){
    server.start(function(){
      server.log(['info'], server.info.uri);
    });
  });
});