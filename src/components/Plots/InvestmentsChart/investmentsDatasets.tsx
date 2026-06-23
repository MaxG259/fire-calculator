import type { CalculatorT } from '../../../types/calculator'

export default function investmentsDatasets(calculator: CalculatorT) {
  const { investments, months, annualInvestmentRate } = calculator
  const newMonthlyInvestments = investments.reduce(
    (acc, entry) => acc + entry.value,
    0
  )
  const totalInvestedArr: number[] = [newMonthlyInvestments]
  const noInvestmentGain: number[] = [newMonthlyInvestments]
  for (let i = 1; i < months; i++) {
    const growth = totalInvestedArr[i - 1] * (annualInvestmentRate / 12)
    totalInvestedArr.push(
      totalInvestedArr[i - 1] + newMonthlyInvestments + growth
    )
    noInvestmentGain.push(noInvestmentGain[i - 1] + newMonthlyInvestments)
  }
  return [
    {
      label: 'Сумма инвестиций',
      data: totalInvestedArr,
      borderWidth: 1,
    },
    {
      label: 'Сумма без роста процентов',
      data: noInvestmentGain,
      borderWidth: 1,
    },
  ]
}
