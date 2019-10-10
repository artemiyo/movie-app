import { createSelector } from 'reselect';

// Getting genres from state
const selectGenres = state => state.genres;

// Memoized selector for the list of genres
export const selectGenresList = createSelector(
  [selectGenres],
  genres => genres.genresList.genres
);

// Memoized selector for the loading genres
export const selectIsGenresLoading = createSelector(
  [selectGenres],
  genres => genres.isGenresLoading
);
