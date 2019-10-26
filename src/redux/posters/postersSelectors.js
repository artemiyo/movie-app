import { createSelector } from 'reselect';

export const postersSelector = state => state.posters;

export const selectPostersList = createSelector(
  [postersSelector],
  posters => posters.postersList
);

export const sellectIsPostersLoading = createSelector(
  [postersSelector],
  posters => posters.isPostersLoading
);
