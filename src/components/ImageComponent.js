import React from "react";
import { Card, Container } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "https://img1.picmix.com/output/stamp/normal/0/1/0/7/1937010_0acc3.gif";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Container>
    <img src={"https://i.pinimg.com/originals/89/da/c4/89dac41b2165052ac7ead1338d72e30a.gif"} alt="fuck u blind people" height={500}/>
      <img src={imageUrl} alt="fuck u blind people" height={500}/>
      </Container>
  );
};

export default ImageComponent;
