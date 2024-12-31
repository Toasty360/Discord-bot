/*
 * Verify the request is from Discord.
 * @param {Request} request
 * @param {Object} env
 * @returns {Promise<boolean>}
 */
export const ValidateRequest = async (request, env) => {
    const signature = request.headers.get('x-signature-ed25519')
    const timestamp = request.headers.get('x-signature-timestamp')

    if (!signature || !timestamp) {
        return false
    }

    const body = await request.clone().text()
    const validRequest = await crypto.subtle.verify(
        'Ed25519',
        await crypto.subtle.importKey(
            'raw',
            hexToUint8Array(env.DISCORD_PUBLIC_KEY),
            { name: 'Ed25519', namedCurve: 'Ed25519' },
            false,
            ['verify']
        ),
        hexToUint8Array(signature),
        new TextEncoder().encode(timestamp + body)
    )

    return validRequest
}

export const hexToUint8Array = hex =>
    new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))
