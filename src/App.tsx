import { Container, Grid, Typography } from '@mui/material'
import CategoryColumn from './components/Entry/CategoryColumn/CategoryColumn'
import Entry from './components/Entry/Entry'
import { useAppSelector } from './redux/hooks'
import { CATEGORIES } from './types/calculator'

function App() {
  const entry = useAppSelector((store) => store.calculator.remaining)
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <h2>Графики</h2>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {CATEGORIES.map((category) => (
          <Grid key={category} size={4}>
            <CategoryColumn category={category} />
          </Grid>
        ))}
        <Grid key='remaining' size={4}>
          <Grid container>
            <Grid key={`category remaining`} size={12}>
              <Typography>remaining</Typography>
            </Grid>
            <Grid size={12} key={entry.id}>
              <Entry entry={entry} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
