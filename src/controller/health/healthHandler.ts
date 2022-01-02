import Hapi from "@hapi/hapi";
import healthCheck from "./healthCheck";
import Boom from '@hapi/boom';

export default async function healthHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {

    try {
        await healthCheck(request.server);
        return {
            status: 'ok',
        }
    }
    catch (err: any) {
        if(Boom.isBoom(err))
            return err;

        let error = err instanceof Error ? err : new Error(err.toString() || '');

        return Boom.boomify(error, { statusCode: 400 });
    }
}
