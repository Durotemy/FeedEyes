import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
// import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Movies = () => {
  // const selector = useSelector();
  const { data, isFetching } = useGetMoviesQuery();
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  return (
    <div>
      <MovieList movies={data} />
    </div>

  );
};

export default Movies;
