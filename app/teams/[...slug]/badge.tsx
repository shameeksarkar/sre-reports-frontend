export default async function Badge({ badge }: { badge: string }) {
  const statusImage = () => {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 28' strokeWidth={4} stroke='currentColor' className='w-4 h-4 inline'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3' />
      </svg>
    )
  }
  
  return (
    <p className='leading-4 text-sm text-slate-400'>
      <span className='text-emerald-500 font-bold'>{statusImage()}8.2% </span> 
      than last week</p>
  )
}