export function parseDate(ts?: string): Date {
  if (!ts) {
    const dt = new Date()
    dt.setDate(dt.getDate() - 1)
    return new Date(dt)
  }

  const y = ts.substring(0, 4)
  const m = ts.substring(4, 6)
  const d = ts.substring(6, 8)
  return new Date(Number(y), Number(m) - 1, Number(d))
}

export function formatDate(dt: Date): string {
  return dt.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}