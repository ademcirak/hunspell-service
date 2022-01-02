import * as Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import plugins from "./plugins";
import routes from './controller/routes';

export const init = async function(): Promise<Server> {
    const server = Hapi.server({
        port: process.env.PORT || 4000,
        host: '0.0.0.0',
        routes: {
            log: {
                collect: true,
            },
            validate: {
                failAction: (request: any, h: any, err: any) => {
                    // show validation errors to user https://github.com/hapijs/hapi/issues/3706
                    throw err
                }
            }
        }
    });

    // @ts-ignore
    await server.register(plugins);

    await server.route(routes);

    await server.initialize();

    return server;
};

export const start = async function (server: Server): Promise<void> {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});
