import { fetchTeam } from '@/libs/teams/api'
import { fetchMetrics } from '@/libs/alerts/api'
import { formatDate, parseDate } from '@/libs/utils/date'

export default async function Team({ params }: { params: { slug: string[] } }) {
  const [name, ts] = params.slug

  const date = parseDate(ts)
  const team = await fetchTeam(name)
  const metrics = await fetchMetrics(name, date)
  
  const badges = {
    'good': <span className='bg-green-100 text-green-600 text-sm font-medium px-1 rounded inline-block'>✅ Good</span>,
    'poor': <span className='bg-red-100 text-red-600 text-sm font-medium px-1 rounded inline-block'>🚨 Poor</span>,
  }

  return (
    <main>
      <h1 className='text-2xl font-medium'>{team.name}</h1>
      <h6 className='text-sm font-medium text-slate-400'>
        Summarised Report for {formatDate(date)}
      </h6>
      <hr className='my-2 h-1 border-t-0 rounded bg-slate-100' /> <br />

      <h1 className='text-2xl font-medium'>Alerts </h1>
      {/* <h6 className='text-xs text-slate-400'>Source: OpsGenie</h6> */}

      <div className='grid grid-cols-5 gap-2 py-2'>
        {metrics.map(metric =>
          <div className=''>
            <p className='text-2xl font-medium inline'>{metric.value}</p>
            <p className='text-sm font-medium text-slate-400 inline'> {metric.desc}</p>
            <p className='text-sm font-medium text-slate-400'>{metric.name}</p>
            {badges[metric.badge]}
          </div>
        )}
      </div>
    </main>
  )
}