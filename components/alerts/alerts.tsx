import { fetchAlerts } from '@/libs/alerts/api'
import { Trend } from '@/libs/alerts/alert'
import Chart from './chart'
import Badge from './badge'


function renderTrend(trend: Trend) {
  function renderIcon(percent: number) {
    const path = 
      percent < 0 
        ? 'M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181' 
        : 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
    
    return (
      <svg fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-4 inline'>
        <path strokeLinecap='round' strokeLinejoin='round' d={path} />
      </svg>
    )
  }

  return (
    <p className='leading-4 text-slate-500'>
      <span className={trend.direction === 'up' ? 'text-emerald-500' : 'text-red-500'}>
        { renderIcon(trend.percent) }
        &nbsp;{Math.abs(trend.percent)}% {trend.duration}
      </span>
    </p>
  )
}

export default async function Alerts({ date, team }: { date: Date, team: string}) {
  const { alerts } = await fetchAlerts(date, team)
  
  return (
    <>
      <h1 className='text-xl text-slate-600 font-medium my-2'>Alerts</h1>
      <div className='grid grid-cols-3 gap-2'>
        {alerts.map(alert =>
          <div className='relative rounded-lg border border-slate-200 p-4 hover:shadow-lg'>
            <p className='text-slate-600'>{alert.title}</p>
            { renderTrend(alert.trend) }

            <div className='flex flex-row'>
              <p className='grow text-2xl font-medium'>
                {alert.value}
                <Badge badge={alert.badge} />
              </p>
              <Chart data={alert.chart} />
            </div>
          </div>
        )}
      </div>
    </>
  )
  
}