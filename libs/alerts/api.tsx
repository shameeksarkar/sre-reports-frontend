import { Metric, Badge } from "./metric"
import { callApi } from "./opsgenie/api"

export async function fetchMetrics(team: string, date: Date): Promise<Metric[]> {
  const alerts = await callApi(team, date)
  const acknowledged = alerts.filter(alert => alert.report.ackTime != alert.report.closeTime)
  const acknowledgeRate = (100 * acknowledged.length / alerts.length) || 100

  const meanTimeToRecover = alerts.reduce((sec, alert) => sec + alert.report.closeTime / 1000, 0) / alerts.length || 0
  const meanTimeToAcknowledge = acknowledged.reduce((sec, alert) => sec + alert.report.ackTime / 1000, 0) / acknowledged.length || 0

  return [
    new Metric(
      'Number of Alerts',
      alerts.length.toLocaleString(),
      alerts.length <= 10 ? Badge.Good : Badge.Poor
    ),
    new Metric(
      'Acknowledged Alerts',
      acknowledged.length.toLocaleString(),
      acknowledgeRate >= 50 ? Badge.Good : Badge.Poor,
      acknowledgeRate.toString() + '%'
    ),
    new Metric(
      'Mean Time to Recover',
      readable(meanTimeToRecover),
      meanTimeToRecover < 300 ? Badge.Good : Badge.Poor
    ),
    new Metric(
      'Mean Time to Acknowledge',
      readable(meanTimeToAcknowledge),
      meanTimeToAcknowledge < 120 ? Badge.Good : Badge.Poor
    )
  ]
}

function readable(sec: number): string {
  const str: string[] = []
  const min = Math.floor(sec / 60)
  if (min > 0) str.push(`${min}m`)
  str.push(`${Math.floor(sec) % 60}s`)
  return str.join(' ')
}