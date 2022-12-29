import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <Link to="/dashboard" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/dashboard/testing2" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemIcon>
            <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
