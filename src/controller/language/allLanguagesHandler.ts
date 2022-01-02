import Hapi from "@hapi/hapi";
import {getLoadedLanguages} from "../../service/language/languageService";

export default async function allLanguagesHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {

    return getLoadedLanguages();
}
