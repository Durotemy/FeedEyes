import React, { useState, useEffect } from 'react';
// import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
// import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  // const selector = useSelector();
  const { data } = useGetMoviesQuery();

  console.log('data', data);

  return (
    <div>
      Movie
    </div>

  );
};

export default Movies;
