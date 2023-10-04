import Badge from './badge'

import { fetchTeam } from '@/libs/teams/api'
import { fetchAlerts } from '@/libs/alerts/api'
import { formatDate, parseDate } from '@/libs/utils/date'
import Chart from './chart'
import Stage from './uptime'

export default async function Team({ params }: { params: { slug: string[] } }) {
  const [name, ts] = params.slug

  const date = parseDate(ts)
  const team = await fetchTeam(name)
  const { alerts } = await fetchAlerts(name, date)
  
  return (
    <main>
      <h1 className='text-2xl font-medium'>{team.name}</h1>
      <h6 className='text-slate-500'>
        Summarised Report for {formatDate(date)}
      </h6>
      <br />

      <h1 className='text-2xl font-medium mb-2'>Alerts</h1>
      <div className='grid grid-cols-4 gap-2'>
        {alerts.map(metric =>
          <div className='relative rounded-md border border-slate-200 p-4 overflow-hidden hover:shadow-lg'>
            <div className='absolute bottom-0 right-1'><Chart /></div>
            <p className='text-slate-500'>{metric.title}</p>
            <Badge badge={metric.badge} />
            <p className='text-2xl font-bold inline'>{metric.value}</p>
          </div>
        )}
      </div>
      
      <br />
      <h1 className='text-2xl font-medium mb-2'>Uptime</h1>
      <Stage />
    </main >
  )
}