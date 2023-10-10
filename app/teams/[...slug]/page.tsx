import Alerts from '@/components/alerts/alerts'

import { fetchTeam } from '@/libs/teams/api'
import { formatDate, parseDate } from '@/libs/utils/date'

export default async function Team({ params }: { params: { slug: string[] } }) {
  const [name, ts] = params.slug

  const team = await fetchTeam(name)
  const date = parseDate(ts)
  
  return (
    <main>
      <h1 className='text-xl text-slate-600 font-medium'>{team.name}</h1>
      <h6 className='text-slate-500'>Here's what happened on {formatDate(date)}</h6>
      <hr className='my-4'/>

      <Alerts date={date} team={team.id} />

      {/* <h1 className='text-2xl font-medium mb-2'>Uptime</h1> */}
      {/* <Stage /> */}
    </main >
  )
}