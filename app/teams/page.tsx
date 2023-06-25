import Link from 'next/link'
import { fetchTeams } from '@/libs/teams/api'

export default async function Teams() {
  const teams = await fetchTeams()

  return (
    <main>
      <h1 className='text-2xl font-medium inline'>Teams </h1>
      <h3 className='text-sm font-medium text-slate-400 inline'>({teams.length})</h3>
      <div className='grid grid-cols-5 gap-2 py-4'>
        {
          teams.map((team: Team) =>
            <Link className='border rounded h-32 px-4 py-2 hover:shadow-md'
              prefetch={false}
              key={team.id}
              href={`/teams/${team.id}`}>
              <p className='text-sm font-medium'>{team.name}</p>
            </Link>
          )
        }
      </div>
    </main>
  )
}
