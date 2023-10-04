import Spark from './spark'

const services = [
  'cms-prod-ktor','cms-prod-sqs', 'gringotts-prod-ktor',
  'hogsmeade-prod-ktor', 'hogsmeade-prod-sqs',
  'invoice-manager-prod-ktor'
]

export default function Stage() {
  const Badge = <svg fill='none' viewBox='0 0 24 28' strokeWidth={4} stroke='currentColor' className='w-4 h-4 inline-block text-emerald-500'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
  </svg>

  const data = (data: number) => {
    // return <span className='text-xs text-emerald-500 border border-emerald-200 bg-emerald-50 rounded-xl px-2 py-1'>{data}</span>
    return <span className='text-sm font-medium text-emerald-500'>{data}</span>
  }

  return (
    <div className='border border-slate-100 rounded rounded-lg overflow-hidden'>
      <table className='w-full table-auto text-left divide-y divide-slate-100'>
        <thead>
          <tr className='text-left'>
            <th className='text-slate-400 font-normal pl-6 p-2'>#</th>
            <th className='font-bold p-2'>Service</th>
            <th className='font-bold p-2'>Status</th>
            <th className='font-bold p-2'></th>
          </tr>
        </thead>
        <tbody className='divide-y divide-slate-100'>
          {
            services.map((service, idx) => (
              <tr className='hover:bg-slate-50'>
                <td className='pl-6 p-2 w-8 text-slate-400'>{(idx+1).toString().padStart(2, '0')}</td>
                <td className='p-2'>{service}</td>

                <td className='px-2 w-16'>{Badge}</td>
                <td className='w-16 p-2'>{data(99.63)}</td>
                <td className='w-16 p-2'>{data(98.55)}</td>
                <td className='w-16 p-2'>{data(77.74)}</td>
                <td className='w-16 p-2'>{data(90.25)}</td>
                <td className='w-16 p-2'>{data(90.25)}</td>
                <td className='w-16 p-2'>{data(99.97)}</td>
                <td className='w-28 pr-6'><Spark /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}