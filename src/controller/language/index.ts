import allLanguagesHandler from "./allLanguagesHandler";
import {ServerRoute} from "@hapi/hapi";

const handlers : ServerRoute[] = [
    {
        method: 'GET',
        path: '/language',
        options: {
            tags: ['api', 'language'],
            description: 'Check if the server is healthy',
            auth: false,
            handler: allLanguagesHandler,
        },
    },
];

export default handlers;
