import indexRoutes from './index';
import healthRoutes from './health';
import languageRoutes from './language';
import spellCheckRoutes from './spell-check';

import {ServerRoute} from "@hapi/hapi";

const routes: ServerRoute[] = [
    ...indexRoutes,
    ...healthRoutes,
    ...languageRoutes,
    ...spellCheckRoutes,
];

export default routes;
