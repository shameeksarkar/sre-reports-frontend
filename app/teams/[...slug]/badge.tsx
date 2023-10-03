export default async function Badge({ badge }: { badge: string }) {
  if (badge == 'good') return <span className='bg-green-100 border-2 border-green-200 rounded-md text-green-600 text-sm font-medium px-1 inline-block'>✅ Good</span>
  if (badge == 'poor') return <span className='bg-red-100 border-2 border-red-200 rounded-md text-red-600 text-sm font-medium px-1 inline-block'>🚨 Poor</span>
  return <span />
}