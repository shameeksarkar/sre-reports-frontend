export default async function Badge({ badge }: { badge: string }) {
  if (badge == 'good') return <span className='bg-green-100 border border-green-200 rounded-xl text-green-600 text-sm font-medium px-2 inline-block'>Good</span>
  if (badge == 'poor') return <span className='bg-red-100 border border-red-200 rounded-xl text-red-600 text-sm font-medium px-2 inline-block'>Poor</span>
  return <span />
}