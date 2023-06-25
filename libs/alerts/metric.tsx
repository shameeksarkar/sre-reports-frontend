export class Metric {
  name: string
  desc?: string
  value: string
  badge: Badge

  constructor(name: string, value: string, badge: Badge, desc?: string) {
    this.name = name
    this.desc = desc
    this.value = value
    this.badge = badge
  }
}

export enum Badge {
  Poor = 'poor',
  Good = 'good'
}