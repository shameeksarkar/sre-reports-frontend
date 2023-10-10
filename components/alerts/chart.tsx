'use client'
import { CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import { Chart as ChartJS } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement)
const options = {
  global: {
    responsive: true,
    maintainAspectRatio: false
  },
  elements: {
    line: {
      tension: 0.5,
      borderWidth: 2.5,
      borderColor: '#60a5fa'
    },
    point: { radius: 0 },
  },
  layout: { padding: 1 },
  scales: {
    y: { display: false },
    x: { display: false }
  }
}

export default function Chart({ data }: { data: number[] }) {
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [{ data }]
  }

  return (
    <div className='flex flex-col flex-none justify-center'>
      <Line height={'24px'} width={'80px'} data={chartData} options={options} />
    </div>
  )
}