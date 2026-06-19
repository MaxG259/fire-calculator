import { Grid, Slider, Stack } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeMonths } from '../../redux/slices/calculator'
import { MAX_MONTHS } from '../../utils/initCalculator'
import InvestmentsChart from './InvestmentsChart/InvestmentsChart'

export default function PlotsWrapper() {
  const months = useAppSelector((store) => store.calculator.months)
  const dispatch = useAppDispatch()
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <InvestmentsChart />
      </Grid>
      <Grid size={12}>
        <Stack spacing={2} direction='row' sx={{ alignItems: 'center', m: 5 }}>
          <Slider
            aria-label='Volume'
            value={months}
            onChange={(_, value) => {
              const newValue = Array.isArray(value) ? value[0] : value
              if (Number.isNaN(value)) return
              dispatch(changeMonths(newValue))
            }}
            max={MAX_MONTHS}
            marks={[
              { value: 0, label: '0' },
              { value: MAX_MONTHS, label: `${MAX_MONTHS}` },
            ]}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}
