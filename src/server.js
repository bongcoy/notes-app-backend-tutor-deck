// File Objective: configure and run HTTP server using Hapi

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    // cors is activated on all routes on the server
    routes: {
      // allows data to be consumed by all origins
      cors: {
        origin: ['*'],
      },
    },
  });

  // server routes
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
