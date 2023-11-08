import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { Box, ThemeProvider, createTheme } from "@mui/material";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const theme = createTheme();

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ backgroundImage: "url(https://i.pinimg.com/originals/ba/72/c6/ba72c6df5ea44e44d3f8e9b66f056dfa.jpg)", minHeight: "100vh",}}>
    <App />
    </Box>
  </ThemeProvider>
);
