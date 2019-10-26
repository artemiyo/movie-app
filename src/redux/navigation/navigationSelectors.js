import { createSelector } from 'reselect';

// Getting genres from state
const selectNavigation = state => state.navigation;

// Memoized selector for the list of genres
export const selectGenresList = createSelector(
  [selectNavigation],
  navigation => navigation.genresList
);

// Memoized selector for the loading genres
export const selectIsNavigationLoading = createSelector(
  [selectNavigation],
  navigation => navigation.isNavigationLoading
);

// Memoized selector for the list of discover
export const selectDiscoverList = createSelector(
  [selectNavigation],
  navigation => navigation.discoverList
);

export const selectGetSelectedMenu = createSelector(
  [selectNavigation],
  navigation => navigation.selectedMenu
);

export const selectMenuId = createSelector(
  [selectNavigation],
  navigation => navigation.menuId
);
