export type EntryT = {
  id: string
  name: string
  value: number
  type: string
}

export const CATEGORIES = [
  'income',
  'FixedExpenses',
  'inflatingExpenses',
  'savings',
  'investments',
] as const

export type CategoryT = (typeof CATEGORIES)[number]

export type CalculatorT = {
  income: EntryT[]
  FixedExpenses: EntryT[]
  inflatingExpenses: EntryT[]
  savings: EntryT[]
  investments: EntryT[]
  remaining: EntryT
}

export function keyIsArrayCategory(key: string): key is CategoryT {
  return CATEGORIES.includes(key as CategoryT)
}
