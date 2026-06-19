export type EntryT = {
  id: string
  name: string
  value: number
  type: string
}

export const CATEGORIES = [
  'income',
  'fixedExpenses',
  'inflatingExpenses',
  'savings',
  'investments',
] as const

export const CATEGORY_WITH_TEXT = [
  { value: 'income', text: 'Доходы' },
  { value: 'fixedExpenses', text: 'Постоянные расходы' },
  { value: 'inflatingExpenses', text: 'Растущие расходы' },
  { value: 'savings', text: 'Сбережения' },
  { value: 'investments', text: 'Инвестиции' },
] as const

export type CategoryT = (typeof CATEGORIES)[number]

export type CalculatorT = {
  income: EntryT[]
  fixedExpenses: EntryT[]
  inflatingExpenses: EntryT[]
  savings: EntryT[]
  investments: EntryT[]
  remaining: EntryT
  months: number
  annualInflationRate: number
  annualInvestmentRate: number
  annualIncomeIncrease: number
}

export function keyIsArrayCategory(key: string): key is CategoryT {
  return CATEGORIES.includes(key as CategoryT)
}
