export const COMMANDS = {
    hi: {
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
                name: 'id', // Make sure the option name is lowercase
                description: 'ID of the Anime',
                type: 4, // Integer
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
                name: 'id', // Option name in lowercase
                description: 'ID of the Anime',
                type: 4, // Integer
                required: true,
            },
        ],
    },
    join: {
        type: 1,
        name: 'join',
        contexts: [0, 1, 2],
        description: 'Join the game',
        dm_permission: true,
    },
    adopt: {
        type: 1,
        name: 'adopt', // Ensure the command name is lowercase
        contexts: [0, 1, 2],
        description: 'Adopt an animal from the wild',
        dm_permission: true,
        options: [
            {
                name: 'name', // Option name must be lowercase
                description: 'Name of the animal',
                type: 3, // String type
                required: true,
            },
        ],
    },
    chaos: {
        type: 1,
        name: 'chaos',
        contexts: [0, 1, 2],
        description: 'Start a chaos game',
        dm_permission: true,
    },
    invite: {
        type: 1,
        name: 'invite',
        contexts: [0, 1, 2],
        description: 'Get an invite link to add the bot to your server',
        dm_permission: true,
    },
}
