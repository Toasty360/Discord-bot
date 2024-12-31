import { sendResponse } from '..'
import {
    InteractionResponseFlags,
    InteractionResponseType,
} from 'discord-interactions'
import { getInfo } from './animeInfo'
import getEpisodes from './episodes'
export async function HandleInteractions(message, env) {
    switch (message.data.name.toLowerCase()) {
        case 'hi': {
            return sendResponse({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: 'Wassup dumbass!!',
                },
            })
        }
        case 'ping': {
            return sendResponse(
                {
                    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                    data: {
                        content: 'Pong! 🏓',
                    },
                },
                200
            )
        }
        case 'invite': {
            const applicationId = env.DISCORD_APPLICATION_ID
            const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${applicationId}`
            return sendResponse({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: INVITE_URL,
                    flags: InteractionResponseFlags.EPHEMERAL,
                },
            })
        }
        case 'aninfo': {
            return await getInfo(message.data.options[0].value)
        }
        case 'aniepisodes': {
            return await getEpisodes(message.data.options[0].value)
        }
        default:
            return sendResponse('Returning default')
    }
}
