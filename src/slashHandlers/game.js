import { InteractionResponseType } from 'discord-interactions'
import { sendResponse } from '..'
import { getRandomPetType, performChaos } from '../util/gameData'

export async function chaos(message, env) {
    const userId = message.member.user.id ?? message.user.id
    console.log(Object.keys(message))

    const petData = await env.KV_GAMES.get(`pet_${userId}`)
    if (!petData) {
        return sendResponse({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: 'You need to adopt a pet first using `/adopt`.',
            },
        })
    }

    const pet = JSON.parse(petData)
    const chaosResult = performChaos(pet)
    pet.points += chaosResult.points
    await env.KV_GAMES.put(`pet_${userId}`, JSON.stringify(pet))
    const embed = {
        title: 'Chaos Result',
        description: `${pet.petName} ( ${pet.petType} ) ${chaosResult.message}`,
        color: parseInt(pet.color.replace('#', ''), 16),
        fields: [
            {
                name: 'Aura',
                value: chaosResult.points,
            },
            {
                name: 'Total Aura',
                value: pet.points,
                inline: true,
            },
        ],
        footer: {
            text: 'Made by @orewatoast ❤️',
        },
        timestamp: new Date().toISOString(),
    }
    return sendResponse({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            embeds: [embed],
        },
    })
}

export async function adopt(message, env) {
    const petName = message.data.options[0].value
    const pet = getRandomPetType()
    const userId = message.member.user.id ?? message.user.id
    console.log(userId)
    // Store pet data in KV
    await env.KV_GAMES.put(
        `pet_${userId}`,
        JSON.stringify({
            petName: petName,
            petType: pet.name,
            image: pet.image,
            color: pet.color,
            points: 0,
        }),
        { expirationTtl: 3600 }
    )

    // Construct embed message
    const embed = {
        title: '🐾 Pet Adopted!',
        description: `Congratulations **${message.member.user.username}**! You adopted a ${pet.name}.`,
        color: parseInt(pet.color.replace('#', ''), 16),
        thumbnail: {
            url: pet.image,
        },
        footer: {
            text: 'Made by @orewatoast ❤️',
        },
        timestamp: new Date().toISOString(),
    }

    return sendResponse({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            embeds: [embed],
        },
    })
}
