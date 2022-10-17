import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => '/genre/movie/list?api_key=3560ed25b99d8da9bc6175fa41d9fd28&language=en-US',
    }),
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // if (genreIdOrCategoryName && typeof genreIdCategoryName === 'string') {
        //   return `movie/${genreIdOrCategoryName}?page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28&language=en-US`;
        // }
        // if (genreIdOrCategoryName && typeof genreIdCategoryName === 'number') {
        //   return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28&language=en-US`;
        // }
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28`;
        }

        //* Get Movies by Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28`;
        }
        return `movie/popular?page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28`;
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
} = tmdbApi;

// return `movie/popular?page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28`,
