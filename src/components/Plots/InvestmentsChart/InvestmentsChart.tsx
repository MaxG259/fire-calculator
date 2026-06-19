import { Chart, registerables } from 'chart.js'
import { useEffect, useRef } from 'react'
import { useAppSelector } from '../../../redux/hooks'

Chart.register(...registerables)

export default function InvestmentsChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const calculator = useAppSelector((store) => store.calculator)

  useEffect(() => {
    if (!canvasRef.current) return
    const ctx = canvasRef.current
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: new Array(calculator.months)
          .fill(null)
          .map((_, i) => `$[${i}]`),
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
        ],
      },
    })

    return () => {
      chart.destroy()
    }
  }, [calculator])

  return <canvas ref={canvasRef} id='investments-chart' />
}
