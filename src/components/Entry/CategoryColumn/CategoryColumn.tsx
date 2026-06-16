import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Grid, Typography } from '@mui/material'
import { useAppSelector } from '../../../redux/hooks'
import type { CategoryT } from '../../../types/calculator'
import Entry from '../Entry'

type CategoryColumnProps = {
  category: CategoryT
}

export default function CategoryColumn({ category }: CategoryColumnProps) {
  const entries = useAppSelector((store) => store.calculator[category])
  return (
    <Grid container>
      <Grid key={`category ${category}`} size={12}>
        <Typography>{category}</Typography>
      </Grid>
      {entries.map((entry) => (
        <Grid size={12} key={entry.id}>
          <Entry entry={entry} />
        </Grid>
      ))}
      <Grid key={`add ${category}`} size={12}>
        <AddCircleIcon />
      </Grid>
    </Grid>
  )
}
