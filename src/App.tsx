import { Container, Grid } from '@mui/material'

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <h2>Графики</h2>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {new Array(6).fill(null).map((_, index) => (
          <Grid key={index} size={4}>
            <h2>Категория</h2>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default App
