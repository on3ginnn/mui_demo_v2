import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { MuiTypography } from './components/MUITypography';
import { MuiButton } from './components/MUIButton';
import { MuiTextField } from './components/MUITextField';
import { MuiSelect } from './components/MUISelect';
import { Stack } from '@mui/material';
import { Container } from '@mui/material';
import { MuiRadioButton } from './components/MUIRadioButton';
import { MuiCheckBox } from './components/MuiCheckBox';
import { MuiSwitch } from './components/MUISwitch';
import { MuiRating } from './components/MUIRating';
import { MuiAutocomplete } from './components/MUIAutocomplete';

function App() {

  return (
    <Container maxWidth='lg'>
      <Stack spacing={15}>
        <MuiTypography></MuiTypography>
        <MuiButton></MuiButton>
        <MuiTextField />
        <MuiSelect />
        <MuiRadioButton />
        <MuiCheckBox />
        <MuiSwitch />
        <MuiRating />
        <MuiAutocomplete />
      </Stack>
    </Container>

  )
}

export default App;
