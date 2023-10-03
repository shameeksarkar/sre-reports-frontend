import Link from 'next/link'
import { fetchTeams } from '@/libs/teams/api'

export default async function Teams() {
  const teams = await fetchTeams()
  const renderCard = (team: Team) => (
    <Link
      className='border border-slate-200 rounded-lg h-32 px-4 py-2 hover:shadow-lg hover:text-blue-600'
      prefetch={false} key={team.id} href={`/teams/${team.id}`}>
      <p className='text-md'>{team.name}</p>
    </Link>
  )

  return (
    <main>
      <h1 className='text-2xl font-medium inline'>Teams </h1>
      <h3 className='text-sm font-medium inline text-slate-400'>({teams.length})</h3>
      <div className='grid grid-cols-4 gap-4 py-2'>
        {teams.map((team: Team) => renderCard(team))}
      </div>
    </main>
  )
}
