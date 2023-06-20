import Link from "next/link"

const teams: string[] = [
  'Partner Ecosystem',
  'Support & Communication',
  'Two Wheelers',
  'Customer Growth & Engagement',
  'Mobile Platforms',
  'Trucks',
  'New Initiatives',
  'Salesforce',
  'Payments & Locations',
  'Allocation & Pricing',
  'Backend Platforms'
]

export default function Teams() {
    return (
      <main>
        <h1 className='text-xl font-bold pt-8'>Teams</h1>
        <div className='grid grid-cols-6 gap-2 py-2'>
          {
            teams.map(team => 
              <Link 
                id={team} 
                href={`/teams/sre`}
                className='hover:drop-shadow-md flex flex-col h-32 bg-white rounded-lg border-2 border-slate-200 cursor-pointer'>

                <div className='grow' />
                <p className='text-sm font-bold px-4 py-2'>{team}</p>
              </Link>
            )
          }
        </div>
      </main>
    )
  }
  