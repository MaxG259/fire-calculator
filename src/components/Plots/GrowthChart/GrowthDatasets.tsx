import type { CalculatorT } from '../../../types/calculator'

export default function GrowthDatasets(calculator: CalculatorT) {
  const {
    investments,
    months,
    annualInvestmentRate,
    fixedExpenses,
    inflatingExpenses,
    annualInflationRate,
    income,
    annualIncomeIncrease,
  } = calculator

  const totalIncome = income.reduce((acc, entry) => acc + entry.value, 0)
  const monthlyIncome: number[] = [totalIncome]

  const newMonthlyInvestments = investments.reduce(
    (acc, entry) => acc + entry.value,
    0
  )
  const newMonthlyFixed = fixedExpenses.reduce(
    (acc, entry) => acc + entry.value,
    0
  )
  const newMonthlyInflating = inflatingExpenses.reduce(
    (acc, entry) => acc + entry.value,
    0
  )
  const newMonthlyExpenses: number[] = [newMonthlyFixed + newMonthlyInflating]
  const totalInvestedArr: number[] = [newMonthlyInvestments]
  const monthlyGrowth: number[] = [0]
  const monthlyInflatingValue: number[] = [newMonthlyInflating]
  for (let i = 1; i < months; i++) {
    const growth = totalInvestedArr[i - 1] * (annualInvestmentRate / 12)
    monthlyGrowth.push(growth)
    totalInvestedArr.push(
      totalInvestedArr[i - 1] + newMonthlyInvestments + growth
    )
    monthlyInflatingValue.push(
      monthlyInflatingValue[i - 1] * (1 + annualInflationRate / 12)
    )
    newMonthlyExpenses.push(newMonthlyFixed + monthlyInflatingValue[i])

    monthlyIncome.push(monthlyIncome[i - 1] * (1 + annualIncomeIncrease / 12))
  }
  return [
    {
      label: 'Ежемесячный ростинвестиций',
      data: monthlyGrowth,
      borderWidth: 1,
    },
    {
      label: 'Расходы',
      data: newMonthlyExpenses,
      borderWidth: 1,
    },
    {
      label: 'Зарплата',
      data: monthlyIncome,
      borderWidth: 1,
    },
  ]
}
