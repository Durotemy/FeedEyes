import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyle from './styles';
// import avatar from "image.png"
const NavBar = () => {
  const style = useStyle();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isAuthenticated = 'true';

  return (
    <AppBar position="fixed">
      <Toolbar className={style.toolbar}>
        {isMobile && (
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => {}}
          className={style.menuButton}
          style={{ outline: 'none' }}

        >
          <Menu />
        </IconButton>
        )}
        <IconButton
          color="inherit"
          sx={{ ml: 1 }}
          onClick={() => {}}
        >
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        <div>
          {!isAuthenticated ? (<Button color="inherit" onClick={() => ('')}>Login &nsbp; <AccountCircle /> </Button>)
            : (
              <Button
                color="inherit"
                onClick={() => ('')}
                component={Link}
                to="/profile/:id"
                className={style.linkButton}
              > {!isMobile && <> My movies &nbsp; </>}<Avatar
                style={{ width: 30, height: 30 }}
                alt="profile"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
              </Button>
            )}
        </div>
        {isMobile && 'Search...'}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
