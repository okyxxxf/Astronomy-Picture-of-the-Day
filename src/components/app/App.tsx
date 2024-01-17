import React, { useState } from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Header from '../header/header';
import ApodSection from '../apodSection/apodSection';
import ApodModal from '../apodModal/apodModal';
import ApodService from '../../services/ApodService';

const App = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [endDate, setEndDate] = useState<null | Date>(null);
  const [items, setItems] = useState([]);

  const handleOpen = () => {
    const service = new ApodService();
    if ((!endDate && !startDate) || !startDate) alert("Please enter valid data");
    if (endDate && startDate) {
      service.getImageByRange(startDate, endDate)
      .then((items) => {
        setItems(items);
        setOpen(true);
      })
      .catch(() => {
        alert("Some error...")
      })
    } 
    else if (startDate){
      service.getImageByDate(startDate)
      .then((item) => {
        setItems(item);
        setOpen(true);
      })
      .catch(() => {
        alert("Some error...")
      })
    }
  }

  const handleClose = () => setOpen(false);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Header 
        handleOpen={handleOpen}
        startDate={startDate} 
        endDate={endDate} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate}
      />
      <ApodSection/>
      {open ? <ApodModal open={open} handleClose={handleClose} items={items}/> : null}
    </LocalizationProvider>
  );
}

export default App;
