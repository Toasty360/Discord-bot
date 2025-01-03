import { COMMANDS } from './commands.js'
export async function registerGlobalCommands(env) {
    const token = env.DISCORD_TOKEN
    const applicationId = env.DISCORD_APPLICATION_ID
    const url = `https://discord.com/api/v10/applications/${applicationId}/commands`
    return await registerCommands(url, token)
}

async function registerCommands(url, token) {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bot ${token}`,
        },
        method: 'PUT',
        body: JSON.stringify(Object.values(COMMANDS)),
    })
    if (response.ok) {
        return await response.json()
    } else {
        console.error('Failed to register commands:', await response.text())
        throw new Error('Failed to register commands')
    }
}
