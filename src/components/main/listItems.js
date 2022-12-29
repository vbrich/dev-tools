import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import HttpIcon from '@mui/icons-material/Http';
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
      <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main" />
      </ListItemButton>
    </Link>
    <Link to="/overview" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItemButton>
    </Link>
    <Link to="/apitest" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemIcon>
          <HttpIcon />
        </ListItemIcon>
        <ListItemText primary="API Test" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Link to="/signin" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemIcon>
            <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
