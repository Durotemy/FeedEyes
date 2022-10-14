import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyle from './style';

const Movie = ({ movie, i }) => {
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Typography className={classes.title} variant="h5">
        {movie.title}
      </Typography>
      <Grow in>
        <Tooltip title={movie.overview} placement="top">
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </Tooltip>
      </Grow>
    </Grid>
  );
};

export default Movie;
