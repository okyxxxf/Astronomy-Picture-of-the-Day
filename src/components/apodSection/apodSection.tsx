import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ApodService from "../../services/ApodService";

const imageStyles = {
  width: "600px",
  height: "auto",
  ObjectFit: "contain",
}

const ApodSection = () => {
  const [imageUrl, setUrl] = useState("");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  const getImage = (date : Date) => {
    const service = new ApodService();
    service.getImageByDate(date)
    .then((res) => {
      setUrl(res.url);
      setLoading(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });

  }

  useEffect(() => {
    getImage(new Date());
  }, []);

  if (isError) return (
    <Box sx={{maxWidth: "1440px", margin: "40px auto", display: "flex", alignItems: "center", justifyContent: "center"}} >
      <Typography variant="h2">Something gone wrong...</Typography>
    </Box>
  )

  if (isLoading) return (
    <Box sx={{maxWidth: "1440px", margin: "40px auto", display: "flex", alignItems: "center", justifyContent: "center"}} >
      <Typography variant="h2">Please wait...</Typography>
    </Box>
  )
  return (
    <Box sx={{maxWidth: "1440px", margin: "40px auto", display: "flex", alignItems: "center", justifyContent: "center"}} >
      <img style={imageStyles} src={imageUrl} alt="apod"/>
    </Box>
  )
}

export default ApodSection;