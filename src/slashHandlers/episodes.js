import { InteractionResponseType } from 'discord-api-types/v10'
import { sendResponse } from '..'

export default async function getEpisodes(id) {
    try {
        const response = await fetch(
            `https://kitsu.app/api/edge/episodes?filter[mediaType]=Anime&filter[media_id]=${id}&sort=number`
        )

        if (!response.ok) {
            throw new Error('Anime not found')
        }

        const episodes = await response.json()

        const { data } = episodes

        const embeds = data.map(episode => ({
            title: `Episode ${episode.attributes.canonicalTitle}`,
            color: 0xff5733,
            image: {
                url: episode.attributes.thumbnail.original,
            },
            description: episode.attributes.description,
            fields: [
                {
                    name: 'Number',
                    value: episode.attributes.number,
                    inline: true,
                },
                {
                    name: 'Air Date',
                    value: episode.attributes.airdate,
                    inline: true,
                },
            ],
            footer: {
                text: 'Data from Kitsu.io',
            },
            timestamp: new Date().toISOString(),
        }))
        return sendResponse({
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
                embeds: embeds,
            },
        })
    } catch (error) {
        console.error('Error fetching episodes:', error)
        return sendResponse('Error fetching episodes', 500)
    }
}
