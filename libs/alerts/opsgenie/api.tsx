export async function callApi(team: string, date: Date): Promise<Alert[]> {
    const startTs = new Date(date).setHours(0, 0, 0, 0) / 1000
    const endTs = startTs + 86400

    const opsgenieTeams = getTeams(team)
    return Promise.all(opsgenieTeams.map(async team => {
        console.log(`⬇️ alerts - team: ${team}, start: ${startTs}, end: ${endTs}`)
        const query = `teams:${team} and createdAt>=${startTs} and createdAt<${endTs} and status:closed`
        const params = new URLSearchParams({ 'query': query, 'limit': '99', 'offset': '0' })
        const headers = { 'Authorization': 'GenieKey 44adcb5f-0a75-400f-b9fb-55cc5cdf33b3' }
        const response = await fetch('https://api.opsgenie.com/v2/alerts?' + params, { method: 'GET', headers })
        const responseJson = await response.json()
        return responseJson['data'] as Alert[]
    })).then(e => e.flat())
}

function getTeams(team: string): string[] {
    return {
        'trucks': ['trucks'],
        'two-wheelers': ['two-wheeler'],
        'allocation-and-pricing': ['allocation-and-pricing'],
        'customer-growth-and-engagement': ['customer-growth-and-engagement'],
        'international-core': ['international-core'],
        'support-and-communications': [
            'support-and-communications-comms',
            'support-and-communications-support'
        ],
        'new-initiatives': [
            'new-initiatives-pnm',
            'new-initiatives-courier'
        ],
        'payments-and-locations': [
            'payments-and-locations-atlas',
            'payments-and-locations-redeye',
            'payments-and-locations-muneemji'
        ],
        'partner-ecosystem': [
            'partner-ecosystem-access-and-affordability',
            'partner-ecosystem-financial-independence',
            'partner-ecosystem-engagement'
        ]
    }[team] || []
}
