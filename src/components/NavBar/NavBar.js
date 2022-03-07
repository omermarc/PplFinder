
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link}  from 'react-router-dom';
import {  Typography, Box } from '@material-ui/core';

import { ToggleOff } from "@material-ui/icons";


const NavBar = ({history}) => {
  const routes = ["/home", "/favorites"];

  return (
    
    <AppBar position="static" style={{ backgroundColor: "black" ,position: "flex", top:0 }}>
      <Typography variant='h3' style={ { color: 'white'}} >
                    Ppl
                </Typography>
                <Box>
                    <Typography variant='h1' style={ { color: 'white', border: '1px solid black' }}>
                        Finder                                        
                    </Typography>
                    <Typography variant='h7' style={ { color: 'white', border: '1px solid black' }}>
                         Like Tinder, but classic ;)
                    </Typography>
                </Box>
      <Tabs
        value={history.location.pathname !== "/home" ? history.location.pathname : false}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
          <Tab label="Home" value={routes[0]} component={Link} to={routes[0]} onClick={()=> routes[0]}/>
          <Tab label="Favorites" value={routes[1]} component={Link} to={routes[1]} onClick={() => routes[1]}/>
          
      </Tabs>
    </AppBar>
  );
};

export default NavBar;