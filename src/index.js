import * as dotenv from 'dotenv';
import Fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import routes from './routes.js';

dotenv.config();

const fastify = Fastify({
    logger: true
});

fastify.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: '/documentation',
    swagger: {
        info: {
            title: 'Swagger API',
            description: 'Swagger API',
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Swagger Documentation'
        },
        host: `localhost:${process.env.SERVER_PORT}`,
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header'
            }
        }
    }
});

fastify.register(routes);

fastify.listen(process.env.SERVER_PORT, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Serveur Fastify démarré sur le port '+process.env.SERVER_PORT);
});
