import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MuiTypography } from './components/MUITypography'
import { MuiButton } from './components/MUIButton'
import { Stack } from '@mui/material'

function App() {

  return (
    <Stack spacing={25}>
      <MuiTypography></MuiTypography>
      <MuiButton></MuiButton>
    </Stack>
  )
}

export default App
