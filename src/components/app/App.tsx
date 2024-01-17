import React from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Header from '../header/header';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Header/>
    </LocalizationProvider>
  );
}

export default App;
