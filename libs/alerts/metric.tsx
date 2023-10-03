export class AlertsResponse {
  alerts: Metric[]

  constructor(alerts: Metric[]) {
    this.alerts = alerts
  }
}

export class Metric {
  title: string
  value: string
  badge: Badge
  meta?: string

  constructor(title: string, value: string, badge: Badge, meta?: string) {
    this.title = title
    this.value = value
    this.badge = badge
    this.meta = meta
  }
}

export enum Badge {
  Poor = 'poor',
  Good = 'good'
}