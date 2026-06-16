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

export type CategoryT = (typeof CATEGORIES)[number]

export type CalculatorT = {
  income: EntryT[]
  fixedExpenses: EntryT[]
  inflatingExpenses: EntryT[]
  savings: EntryT[]
  investments: EntryT[]
  remaining: EntryT
}

export function keyIsArrayCategory(key: string): key is CategoryT {
  return CATEGORIES.includes(key as CategoryT)
}
