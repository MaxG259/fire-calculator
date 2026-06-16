import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { transliterate as tr } from 'transliteration'
import { v4 as uuidv4 } from 'uuid'
import type { CalculatorT, EntryT } from '../../types/calculator'
import { CATEGORIES, keyIsArrayCategory } from '../../types/calculator'

const initialState: CalculatorT = {
  income: [],
  fixedExpenses: [],
  inflatingExpenses: [],
  savings: [],
  investments: [],
  remaining: {
    id: 'remaining',
    name: 'Remaining',
    value: 0,
    type: 'Остаток',
  },
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addEntry: (
      state,
      action: PayloadAction<{ category: string; type: string }>
    ) => {
      const { category, type } = action.payload
      if (!keyIsArrayCategory(category)) return
      state[category].push({
        id: uuidv4(),
        type,
        name: tr(type),
        value: 0,
      })
    },
    deleteEntry: (
      state,
      action: PayloadAction<EntryT['id']>) => {
        for (const category of CATEGORIES) {
          const targetIndex = state[category].findIndex(entry => entry.id === action.payload)
          if (targetIndex !== -1) {
            state[category].splice(targetIndex, 1)
            return
          }
        }
    },
    changeEntryValue: (state, action: PayloadAction<EntryT>) => {
      const { id, value } = action.payload
      for (const category of CATEGORIES) {
        const targetEntry = state[category].find((entry) => entry.id === id)
        if (targetEntry) {
          targetEntry.value = value
          return
        }
      }
    }
  },
});

export const { addEntry, deleteEntry, changeEntryValue } = calculatorSlice.actions

export default calculatorSlice.reducer
