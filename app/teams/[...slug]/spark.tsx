'use client'
import { CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'
import { Chart as ChartJS } from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)
const options = {
  global: { 
    responsive: true,
    maintainAspectRatio: false 
  },
  hover: { intersect: false },
  layout: { padding: 2 },
  elements: {
    line: { 
      borderWidth: 2,
      tension: 0.5 
    },
    point: { 
      radius: 0, 
      hoverRadius: 0,
      style: false 
    }
  },
  scales: {
    y: { display: false },
    x: { display: false }
  }
}

export default function Spark() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    datasets: [{
      backgroundColor: '#dbeafe',
      borderColor: '#93c5fd',
      data: [17, 18, 6, 12, 3, 20, 8, 1, 11, 4, 13, 2, 10, 15]
    }]
  }

  return (
    <Line height={10} width={50} data={data} options={options} />
  )
}