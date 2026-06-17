import { v4 as uuidv4 } from 'uuid'
import { type CalculatorT } from '../types/calculator'
// моковые данные для инициализации калькулятора

const income = [
  { id: uuidv4(), name: 'Зарплата', value: 100000, type: 'income' },
  { id: uuidv4(), name: 'Подработка', value: 20000, type: 'income' },
]

const fixedExpenses = [
  { id: uuidv4(), name: 'Аренда', value: 20000, type: 'expense' },
  { id: uuidv4(), name: 'Подписки', value: 3000, type: 'expense' },
]

const savings = [
  { id: uuidv4(), name: 'Накопления', value: 10000, type: 'savings' },
]

const investments = [
  { id: uuidv4(), name: 'Покупка Акций', value: 5000, type: 'investments' },
]

const inflatingExpenses = [
  { id: uuidv4(), name: 'Продукты', value: 20000, type: 'expense' },
  { id: uuidv4(), name: 'Транспорт', value: 7000, type: 'expense' },
]

export const initialCalculator: CalculatorT = {
  income,
  fixedExpenses,
  inflatingExpenses,
  savings,
  investments,
  remaining: {
    id: uuidv4(),
    name: 'Остаток',
    value: 100000 + 20000 - 20000 - 3000 - 10000 - 5000 - 20000 - 7000,
    type: 'Остаток',
  },
}
