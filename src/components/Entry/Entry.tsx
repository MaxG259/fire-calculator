import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import { useAppDispatch } from '../../redux/hooks'
import { changeEntryValue, deleteEntry } from '../../redux/slices/calculator'
import type { EntryT } from '../../types/calculator'

type EntryProps = {
  entry: EntryT
}

// <InputLabel htmlFor='input-with-icon-adornment'>ЗДЕСЬ ИМЯ ВЗЯТО ИЗ МОКА {entry.name}</InputLabel>

export default function Entry({ entry }: EntryProps) {
  const dispatch = useAppDispatch()
  return (
    <>
      <InputLabel htmlFor='input-with-icon-adornment'>{entry.name}</InputLabel>
      <Input
        id={`label-${entry.id}`}
        value={entry.value}
        name={entry.name}
        onChange={(e) => {
          const newValue = Number(e.target.value)
          if (isNaN(newValue)) return
          dispatch(changeEntryValue({ ...entry, value: newValue }))
        }}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => dispatch(deleteEntry(entry.id))}
              edge='end'
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  )
}
