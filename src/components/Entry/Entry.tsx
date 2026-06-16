import ClearIcon from '@mui/icons-material/Clear'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import { useAppDispatch } from '../../redux/hooks'
import { changeEntryValue } from '../../redux/slices/calculator'
import type { EntryT } from '../../types/calculator'

type EntryProps = {
  entry: EntryT
}

export default function Entry({ entry }: EntryProps) {
  const dispatch = useAppDispatch()
  return (
    <>
      <InputLabel htmlFor='input-with-icon-adornment'>
        With a start adornment
      </InputLabel>
      <Input
        id='input-with-icon-adornment'
        value={entry.value}
        name={entry.name}
        onChange={(e) => {
          const newValue = Number(e.target.value)
          if (isNaN(newValue)) return
          dispatch(changeEntryValue({ ...entry, value: newValue }))
        }}
        endAdornment={
          <InputAdornment position='end'>
            <ClearIcon />
          </InputAdornment>
        }
      />
    </>
  )
}
