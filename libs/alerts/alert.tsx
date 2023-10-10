export class AlertsResponse {
  alerts: Alert[]

  constructor(alerts: Alert[]) {
    this.alerts = alerts
  }
}

export class Alert {
  title: string
  value: string
  badge: Badge
  chart: number[]
  trend: Trend

  constructor(title: string, value: string, badge: Badge, meta?: string, chart: number[], trend: Trend) {
    this.title = title
    this.value = value
    this.badge = badge
    this.chart = chart
    this.trend = trend
  }
}

export enum Badge {
  Poor = 'poor',
  Good = 'good'
}

export class Trend {
  percent: number
  duration: string
  direction: string

  constructor(percent: number, duration: string, direction: string) {
    this.percent = percent
    this.duration = duration
    this.direction = direction
  }
}