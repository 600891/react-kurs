import React from "react";
import { Card } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "https://img1.picmix.com/output/stamp/normal/0/1/0/7/1937010_0acc3.gif";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Card sx={{ my: 4 }}>
      <img src={imageUrl} alt="fuck u blind people"/>
    </Card>
  );
};

export default ImageComponent;
