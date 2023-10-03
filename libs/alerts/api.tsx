import { AlertsResponse } from "./metric"

export async function fetchAlerts(team: string, date: Date): Promise<AlertsResponse> {
    const params = new URLSearchParams({ 'team': team, 'date': fmtDate(date) })
    const response = await fetch('http://0.0.0.0:8000/alerts?' + params, { method: 'GET'})
    return response.json()
}

function fmtDate(date: Date): string {
    const leftPad = (num: Number) => num.toString().padStart(2, '0')
    return [
        date.getFullYear(),
        leftPad(date.getMonth() + 1),
        leftPad(date.getDate()),
    ].join('')
}