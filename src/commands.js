export const COMMANDS = {
    Hi: {
        name: 'hi',
        type: 1,
        description: 'Drop some cuteness on this channel.',
        dm_permission: true,
        contexts: [0, 1, 2],
    },
    ping: {
        name: 'ping',
        type: 1,
        description: 'Replies with Pong!',
        dm_permission: true,
        contexts: [0, 1, 2],
    },
    aninfo: {
        type: 1,
        name: 'aninfo',
        contexts: [0, 1, 2],
        description: 'Displays Anime information based on kitsu ID',
        dm_permission: true,
        options: [
            {
                name: 'id',
                description: 'ID of the Anime',
                type: 4,
                required: true,
            },
        ],
    },
    aniepisodes: {
        type: 1,
        name: 'aniepisodes',
        contexts: [0, 1, 2],
        description:
            'Displays Anime episodes based on kitsu ID. `Not yet finished!`',
        dm_permission: true,
        options: [
            {
                name: 'id',
                description: 'ID of the Anime',
                type: 4,
                required: true,
            },
        ],
    },
    invite: {
        type: 1,
        name: 'invite',
        contexts: [0, 1, 2],
        description: 'Get an invite link to add the bot to your server',
        dm_permission: true,
    },
}
