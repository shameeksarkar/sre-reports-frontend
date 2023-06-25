interface Alert {
  status: string,
  report: Report,
  acknowledged: boolean
}

interface Report {
  ackTime: number,
  closeTime: number
}