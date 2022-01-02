import healthHandler from "./healthHandler";
import {ServerRoute} from "@hapi/hapi";

const handlers : ServerRoute[] = [
    {
        method: 'GET',
        path: '/status',
        options: {
            tags: ['api', 'health'],
            description: 'Check if the server is healthy',
            auth: false,
            handler: healthHandler,
        },
    },
];

export default handlers;
