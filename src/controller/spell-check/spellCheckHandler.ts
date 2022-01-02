import Hapi from "@hapi/hapi";
import {spellCheck} from "../../service/spell-check/spellCheckService";
import SpellCheckRequestModel from "./model/SpellCheckRequestModel";

export default async function spellCheckHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {

    const {lang, text} = request.payload as SpellCheckRequestModel;

    return spellCheck(lang, text);
}
