import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import HapiSwagger from "hapi-swagger";
import packageJson from '../package.json';
import * as Hapi from '@hapi/hapi';

const plugins: Array<Hapi.ServerRegisterOptions | Hapi.ServerRegisterPluginObject<any>> | Hapi.Plugin<any> = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            info: {
                title: `${packageJson.name} - API Documentation`,
                version: packageJson.version,
            },
            jsonPath: '/swagger/swagger.json',
            documentationPath: '/swagger-ui',
            swaggerUIPath: '/swagger-ui/swagger/',
            reuseDefinitions: false,
        }
    }
];

export default plugins;
