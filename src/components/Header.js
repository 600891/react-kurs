import * as React from "react";
import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" style={{backgroundColor: "lightblue"}}>
      <Toolbar>
        <img src="http://www.glittertextonline.com/donez/z654bb012dc4de.gif"/>
      </Toolbar>
    </AppBar>
  );
}
