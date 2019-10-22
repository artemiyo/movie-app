import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectMovieItem = createSelector(
  [selectMovie],
  movie => movie.movieItem
);

export const selectIsMovieLoading = createSelector(
  [selectMovie],
  movie => movie.isMovieLoading
);
