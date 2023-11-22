import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './homePage';
import { Divider } from '@mui/material';
import './home.css';


function Home()
 {

  const pages = ['Risk Insights through Analytics (RIA)', 'About Us', 'Platform & Solutions','FAQs','Contact Us'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <AppBar >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* used for desktop  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Deloitte
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem sx={{display:{xs:'none' , md:'flex'}}} />

          {/* menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* mobile responsive */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Deloitte
          </Typography>
          {/* desktop app bar*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography sx={{fontSize: '14px', fontFamily: 'Arial, sans-serif',}}>
                {page}
                </Typography>
              </Button>
            ))}
          </Box>
          <Typography sx={{fontSize: '14px', fontFamily: 'Arial, sans-serif'}}>
                <Button color="inherit">Existing User Sign-In</Button>
          </Typography>
         <Typography sx={{fontSize: '14px', fontFamily: 'Arial, sans-serif'}}>
                <Button color="inherit">Talk to Us</Button>
         </Typography>
          
        </Toolbar>
      </Container>
    </AppBar> 
    </ThemeProvider>   
    <HomePage></HomePage>
    </>
  );
}
export default Home;
