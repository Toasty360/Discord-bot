import { InteractionResponseType } from 'discord-api-types/v10'
import { sendResponse } from '..'

export async function getInfo(id) {
    const animeId = id
    try {
        const response = await fetch(
            `https://kitsu.io/api/edge/anime/${animeId}`
        )
        const animeData = await response.json()

        if (!response.ok) {
            throw new Error('Anime not found')
        }

        const { attributes } = animeData.data

        const embed = {
            title: attributes.canonicalTitle,
            description:
                attributes.synopsis?.substring(0, 600) + '...' ||
                'No synopsis available',
            color: 0xff5733,
            image: {
                url: attributes.coverImage.original,
            },
            thumbnail: {
                url: attributes.posterImage.original,
            },
            fields: [
                {
                    name: 'Rating',
                    value: attributes.averageRating
                        ? `${parseFloat(attributes.averageRating).toFixed(2)}%`
                        : 'N/A',
                    inline: true,
                },
                {
                    name: 'Status',
                    value:
                        attributes.status.charAt(0).toUpperCase() +
                        attributes.status.slice(1),
                    inline: true,
                },
                {
                    name: 'Episodes',
                    value: attributes.episodeCount?.toString() || 'N/A',
                    inline: true,
                },
                {
                    name: 'Start Date',
                    value:
                        new Date(attributes.startDate).toLocaleDateString() ||
                        'N/A',
                    inline: true,
                },
            ],
            footer: {
                text: 'Data from Kitsu.io',
            },
            timestamp: new Date().toISOString(),
        }

        return sendResponse({
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
                embeds: [embed],
            },
        })
    } catch (error) {
        return sendResponse({
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
                content:
                    'Error: Unable to fetch anime information. Please check the ID and try again.',
                flags: 1 << 6,
            },
        })
    }
}
