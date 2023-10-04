import Spark from './spark'

const services = [
  'cms-prod-ktor','cms-prod-sqs','gringotts-prod-ktor',
  'hogsmeade-prod-ktor','hogsmeade-prod-sqs','invoice-manager-prod-ktor',
  'pfb-dg-prod-ktor','porterbizz-prod-ktor','porterbizz-prod-sqs','prism-prod-ktor',
  'prism-prod-sqs','promotions-prod-ktor','promotions-prod-sqs',
  'frontend-virality-prod-v2','tax-receipt-platform-prod-sqs',
  'ebusiness-card-gw-prod','oms-prod-server-demand',
  'pfe-gateway-prod-ktor','webengage-prod','fe-website-ssr-prod',
  'frontend-cms-prod','frontend-pfe-prod','frontend-website-prod',
  'oms-prod-sidekiq-cge','gringotts-prod-sqs'
]

export default function Stage() {
  const data = (data: number) => {
    return <span className=''>{data}</span>
  }

  return (
    <div className='border border-slate-100 rounded rounded-lg'>
      <table className='w-full table-auto text-sm text-left divide-y divide-slate-100'>
        <thead className=''>
          <tr className=''>
            <th className='px-6 py-2 text-slate-400'>#</th>
            <th className='py-2'>Service</th>
            <th className='py-2'>Uptime</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-slate-100'>
          {
            services.map((service, idx) => (
              <tr className='hover:bg-slate-50'>
                <td className='px-6 py-2 w-8 text-slate-400'>{(idx+1).toString().padStart(2, '0')}</td>
                <td className=''>{service}</td>

                <td className='w-16'>
                  {/* <span className='text-xs font-medium px-2 py-1 text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-xl'>
                    GOOD
                  </span>&nbsp; */}
                  {data(99.59)}
                </td>

                <td className='w-16'>{data(99.63)}</td>
                <td className='w-16'>{data(98.55)}</td>
                <td className='w-16'>{data(77.74)}</td>
                <td className='w-16'>{data(90.25)}</td>
                <td className='w-16'>{data(90.25)}</td>
                <td className='w-16'>{data(99.97)}</td>
                <td className='w-28 pr-6'><Spark /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    
  )
}