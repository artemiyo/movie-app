import { createSelector } from 'reselect';

// Getting genres from state
const selectNavigation = state => state.navigation;

// Memoized selector for the list of genres
export const selectGenresList = createSelector(
  [selectNavigation],
  navigation => navigation.genresList.genres
);

// Memoized selector for the loading genres
export const selectIsGenresLoading = createSelector(
  [selectNavigation],
  navigation => navigation.isGenresLoading
);

export const selectNavItemName = createSelector(
  [selectNavigation],
  navigation => navigation.navItemName
);
