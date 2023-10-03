'use client'

import { Chart as ChartJS } from 'chart.js';
import { 
  CategoryScale,
  LinearScale,
  BarElement,
  Filler
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Filler
)

export default function Chart() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    datasets: [{
      backgroundColor: '#bfdbfe',
      data: [17, 18, 6, 12, 3, 20, 8, 1, 11, 4, 13, 2, 10, 15]
    }]
  }

  const options = {
    global: {
      responsive: true,
      maintainAspectRatio: false
    },
    elements: {
      point: { radius: 0 },
      line: { tension : 0.5 }
    },
    scales: {
      y: { display: false },
      x: { display: false }
    }
  }

  return (
    <Bar height='50px' width='100px' data={data} options={options} />
  )
}