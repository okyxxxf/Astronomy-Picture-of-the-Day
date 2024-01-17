import React, {  } from "react";
import "./header.css";
import { DatePicker } from "@mui/x-date-pickers";
import { Box, Button, Typography } from "@mui/material";

const headerWrapperStyles = {
  maxWidth: "1380px",
  width: "100%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  height: "100%",
  justifyContent: "space-between",
  padding: "0 10px"
}

interface headerProps {
  handleOpen : Function,
  startDate : Date | null,
  endDate : Date | null,
  setStartDate : Function,
  setEndDate : Function,
}

const Header = ({handleOpen, startDate, endDate, setStartDate, setEndDate} : headerProps) => {
  return (
    <Box component={"header"} sx={{height: "150px", boxShadow: "2px 0 5px 1px black"}}>
      <Box sx={headerWrapperStyles}>
        <Typography variant="h3" component="h1">APOD</Typography>
        <Box sx={{display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center"}}>
          <DatePicker value={startDate} onChange={(value) => setStartDate(value)} label="Select start date" />
          <DatePicker value={endDate} onChange={(value) => setEndDate(value)} label="Select end date" />
          <Button variant="contained" onClick={() => handleOpen()}>Get picture</Button>
        </Box>
      </Box>
    </Box>
  )
};

export default Header;