/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => '/genre/movie/list?api_key=3560ed25b99d8da9bc6175fa41d9fd28&language=en-US',
    }),
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28`;
        }

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
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=3560ed25b99d8da9bc6175fa41d9fd28`,
    }),

    //* Get User Specific Lists
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=3560ed25b99d8da9bc6175fa41d9fd28&session_id=${sessionId}&page=${page}`,
    }),

    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=3560ed25b99d8da9bc6175fa41d9fd28`,
    }),

    getActorsDetails: builder.query({
      query: (id) => `person/${id}?api_key=3560ed25b99d8da9bc6175fa41d9fd28`,
    }),

    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetListQuery,
  useGetRecommendationsQuery,
  useGetActorsDetailsQuery,
  useGetMoviesByActorIdQuery,
} = tmdbApi;

// return `movie/popular?page=${page}&api_key=3560ed25b99d8da9bc6175fa41d9fd28`,
