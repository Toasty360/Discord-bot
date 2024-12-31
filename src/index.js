import { InteractionResponseType, InteractionType } from 'discord-interactions'
import { Router } from 'itty-router'
import { registerGlobalCommands } from './register'
import { ValidateRequest } from './validate'
import { HandleInteractions } from './slashHandlers/handler'

const router = Router()
export default {
    async fetch(request, env) {
        if (request.method === 'POST') {
            const valid = await ValidateRequest(request, env)
            if (!valid) {
                return sendResponse('Unauthorized', 401)
            }
        }
        return router.handle(request, env)
    },
}

export const sendResponse = (responseData, status = 200) => {
    return new Response(JSON.stringify(responseData), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        status,
    })
}

router.get('/', () => {
    return sendResponse('Hello! This is the root page of your Worker.')
})
router.get('/register', async (_, env) => {
    try {
        return sendResponse(await registerGlobalCommands(env))
    } catch (error) {
        console.error(error)
        return sendResponse('Error registering commands', 500)
    }
})

router.post('/', async (request, env) => {
    const message = await request.json()
    if (message.type === InteractionType.PING) {
        return sendResponse({
            type: InteractionResponseType.PONG,
        })
    }

    if (message.type === InteractionType.APPLICATION_COMMAND) {
        return await HandleInteractions(message, env)
    }

    return sendResponse({ error: 'Unknown Type' }, 400)
})
