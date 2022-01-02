import spellCheckHandler from "./spellCheckHandler";
import {ServerRoute} from "@hapi/hapi";
import Joi from "joi";

const SpellCheckRequestSchema = Joi.object({
    lang: Joi.string().min(2).required(),
    text: Joi.string().required(),
}).label('SpellCheckRequest');

const SpellCheckResultSchema = Joi.object({
    text: Joi.string().required(),
    offset: Joi.number().required(),
    index: Joi.number().required(),
    suggestions: Joi.array().items(Joi.string()),
}).label('SpellCheckResult');

const SpellCheckResponseSchema = Joi.array().items(SpellCheckResultSchema);

const handlers : ServerRoute[] = [
    {
        method: 'POST',
        path: '/spell-check',
        options: {
            tags: ['api', 'spell-check'],
            description: 'spell check returns errors as array',
            auth: false,
            handler: spellCheckHandler,
            validate: {
                payload: SpellCheckRequestSchema,
            },
            response: {
                schema: SpellCheckResponseSchema,
            },
        },
    },
];

export default handlers;
