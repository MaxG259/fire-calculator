import { Container, Grid, Typography } from '@mui/material'
import AddEntryModal from './components/Entry/AddEntryModal/AddEntryModal'
import CategoryColumn from './components/Entry/CategoryColumn/CategoryColumn'
import Entry from './components/Entry/Entry'
import { useAppSelector } from './redux/hooks'
import { CATEGORY_WITH_TEXT } from './types/calculator'

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
        {CATEGORY_WITH_TEXT.map((category) => (
          <Grid key={category.value} size={4}>
            <CategoryColumn category={category.value} text={category.text} />
          </Grid>
        ))}
        <Grid key='remaining' size={4}>
          <Grid container>
            <Grid key={`category remaining`} size={12}>
              <Typography variant='h6'>Остаток</Typography>
            </Grid>
            <Grid size={12} key={entry.id}>
              <Entry entry={entry} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AddEntryModal />
    </Container>
  )
}

export default App
