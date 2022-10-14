import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const tmdbkey = process.env.REACT_APP_TMDB_KEY;
const page = 1;
export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => '/genre/movie/list?api_key=3560ed25b99d8da9bc6175fa41d9fd28&language=en-US',
    }),
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
} = tmdbApi;
