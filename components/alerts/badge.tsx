export default async function Badge({ badge }: { badge: string }) {
  const colorTags = 
    badge == 'good' 
      ? 'text-emerald-500 bg-emerald-50 border-emerald-200'
      : 'text-red-400 bg-red-50 border-red-200'

  return <span className={'text-xs font-bold rounded border-2 rounded-xl px-1 mx-1 ' + colorTags}>{badge.toUpperCase()}</span>
}