import { createSelector } from 'reselect';

const selectGenres = state => state.genres;

export const selectGenresList = createSelector(
  [selectGenres],
  genres => genres.genresList.genres
);

export const selectIsGenresLoading = createSelector(
  [selectGenres],
  genres => genres.isGenresLoading
);
