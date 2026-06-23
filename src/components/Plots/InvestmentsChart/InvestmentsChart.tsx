import { Chart, registerables } from 'chart.js'
import { useEffect, useRef } from 'react'
import { useAppSelector } from '../../../redux/hooks'
import investmentsDatasets from './investmentsDatasets'

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
        datasets: investmentsDatasets(calculator),
      },
    })

    return () => {
      chart.destroy()
    }
  }, [calculator])

  return <canvas ref={canvasRef} id='investments-chart' />
}
