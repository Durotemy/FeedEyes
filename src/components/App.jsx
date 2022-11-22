import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import useStyles from './styles';
import useAlan from './Alan';
import { Actors, Movies, Profile, NavBar, MovieInformation } from '.';

const App = () => {
  const classes = useStyles();
  useAlan();
  const alanBtnContainer = useRef();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};
export default App;
