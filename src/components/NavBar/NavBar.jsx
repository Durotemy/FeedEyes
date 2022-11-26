import React, { useState, useEffect, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import useStyle from './styles';
import { Sidebar, Search } from '..';
import { setUser, userSelector } from '../../features/auth';
import { fetchToken, moviesApi, createSessionId } from '../../utils/index';
import { ColorModeContext } from '../../utils/ToggleColorMode';

const NavBar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const style = useStyle();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const colorMode = useContext(ColorModeContext);
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (localStorage.getItem('session_id')) {
          const { data: userData } = await moviesApi.get(`account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={style.toolbar}>
          {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            className={style.menuButton}
            style={{ outline: 'none' }}
          >
            <Menu />
          </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (<Button color="inherit" onClick={fetchToken}>Login &nbsp; <AccountCircle /> </Button>)
              : (
                <Button
                  color="inherit"
                  onClick={() => {}}
                  component={Link}
                  to={`/profile/${user.id}`}
                  className={style.linkButton}
                > {!isMobile && <> My movies &nbsp; </>}<Avatar
                  style={{ width: 30, height: 30 }}
                  alt="profile"
                  src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
                />
                </Button>
              )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={style.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              style={{ paper: style.drawerpaper }}
              ModalProps={{ KeepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer style={{ paper: style.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};
export default NavBar;
