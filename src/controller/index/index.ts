import indexHandler from "./indexHandler";
import {ServerRoute} from "@hapi/hapi";

const handlers : ServerRoute[] = [
    {
        method: 'GET',
        path: '/',
        handler: indexHandler,
        options: {
            auth: false,
        },
    },
];

export default handlers;
