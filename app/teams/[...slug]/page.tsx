import Badge from './badge'

import { fetchTeam } from '@/libs/teams/api'
import { fetchAlerts } from '@/libs/alerts/api'
import { formatDate, parseDate } from '@/libs/utils/date'

export default async function Team({ params }: { params: { slug: string[] } }) {
  const [name, ts] = params.slug

  const date = parseDate(ts)
  const team = await fetchTeam(name)
  const { alerts } = await fetchAlerts(name, date)
  
  return (
    <main>
      <h1 className='text-2xl font-medium'>{team.name}</h1>
      <h6 className='text-sm font-medium text-slate-400'>
        Summarised Report for {formatDate(date)}
      </h6>
      <br />

      <h1 className='text-2xl font-medium mb-2'>Alerts </h1>
      <div className='grid grid-cols-5 gap-2'>
        {alerts.map(metric =>
          <div className='rounded-md border border-slate-200 bg-slate-50 p-2 hover:shadow-lg'>
            <p className='text-2xl font-medium inline'>{metric.value}</p>
            <p className='text-sm font-medium text-slate-400 inline'> {metric.meta}</p>
            <p className='text-sm font-medium text-slate-400'>{metric.title}</p>
            <Badge badge={metric.badge} />
          </div>
        )}
      </div>
    </main >
  )
}