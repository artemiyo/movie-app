import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

export const selectMoviesList = createSelector(
  [selectMovies],
  movies => movies.moviesList
);

export const selectIsMoviesLoading = createSelector(
  [selectMovies],
  movies => movies.isMoviesLoading
);
