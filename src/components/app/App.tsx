import React from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Header from '../header/header';
import ApodSection from '../apodSection/apodSection';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Header/>
      <ApodSection/>
    </LocalizationProvider>
  );
}

export default App;
