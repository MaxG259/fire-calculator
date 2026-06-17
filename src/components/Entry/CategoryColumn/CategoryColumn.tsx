import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Grid, IconButton, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { openModal } from '../../../redux/slices/modal'
import type { CategoryT } from '../../../types/calculator'
import Entry from '../Entry'

type CategoryColumnProps = {
  category: CategoryT
  text: string
}

export default function CategoryColumn({
  category,
  text,
}: CategoryColumnProps) {
  const entries = useAppSelector((store) => store.calculator[category])
  const dispatch = useAppDispatch()
  return (
    <Grid container>
      <Grid key={`category ${category}`} size={12}>
        <Typography variant='h6'>{text}</Typography>
      </Grid>
      {entries.map((entry) => (
        <Grid
          sx={{ marginBottom: '30px', marginTop: '20px' }}
          size={12}
          key={entry.id}
        >
          <Entry entry={entry} />
        </Grid>
      ))}
      <Grid key={`add ${category}`} size={12}>
        <IconButton
          aria-label='toggle password visibility'
          onClick={() => dispatch(openModal(category))}
          edge='end'
        >
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
