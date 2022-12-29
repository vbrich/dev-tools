import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import dark from '../../themes/dark';
import light from '../../themes/light';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HttpIcon from '@mui/icons-material/Http';
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function MainContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [linkColor, setLinkColor] = useState('#000');

  // This function triggered when switch is clicked
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (linkColor === '#000')
      setLinkColor('#fff');
    else 
      setLinkColor('#000');
  }

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark): createTheme(light)}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {/* title goes here */}
            </Typography>

            <IconButton 
              color="inherit" 
              aria-label="light" 
              size="small" 
              onClick={() => {
                changeTheme();
              }}>
              {isDarkTheme ? <LightModeOutlinedIcon fontSize="inherit"/> : <NightlightOutlinedIcon fontSize="inherit"/>}  
            </IconButton>

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon fontSize='inherit'/>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">            
            <Link to="/overview" style={{ color: linkColor, textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </Link>
            <Link to="/apitest" style={{ color: linkColor, textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <HttpIcon />
                </ListItemIcon>
                <ListItemText primary="API Test" />
              </ListItemButton>
            </Link>    
            <Divider sx={{ my: 1 }} />
            <Link to="/signin" style={{ color: linkColor, textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </Link>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],            
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Toolbar />

          <Outlet></Outlet>

          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          >
          <Container maxWidth="sm">
            <Footer></Footer>          
          </Container>
          </Box>

        </Box>

{/* Just a pallete example
        <Box sx={{
          bgcolor: 'something.primary'
        }}>Testing</Box>
*/}

      </Box>
    </ThemeProvider>
  );
}

export default function Main() {
  return <MainContent />;
}
