import React, {useState} from "react";
import { Typography, Box, Button, TextField, Switch } from "@mui/material";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const headerText = "React"
  const descriptionText =  "I dag skal jeg lære om React, og lage en nettside. :)";

  const [value, setValue] = useState("heihei");
  const [inputResult, setInputResult] = useState(" ");
  const [checked, setChecked] = useState(false);

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {headerText}
      </Typography>
      <Typography variant="body1">{descriptionText}</Typography>
      <Switch value={checked} onChange={(e) => setChecked(e.target.value)}/>
      <TextField id="outlined" value={value} onChange={(e) => setValue(e.target.value)}/>
      <Button type="submit" onClick={(e) => setInputResult(value)}>Submit</Button>
      <Typography variant="body1">{inputResult}</Typography>
    </Box>
  );
};

export default Description;
