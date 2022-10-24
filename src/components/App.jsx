import React from 'react';
import { CssBaseline } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import useStyles from './styles';
import { Actors, Movies, Profile, NavBar, MovieInformation } from '.';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};
export default App;
