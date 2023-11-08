import * as React from "react";
import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" style={{backgroundColor: "lightblue"}}>
      <Toolbar>
        <img src="/nora.gif"/>
      </Toolbar>
    </AppBar>
  );
}
