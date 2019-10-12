import moviesTypes from './moviesTypes';

export const fetchMoviesStart = () => ({
  type: moviesTypes.FETCH_MOVIES_START
});

export const fetchMoviesSuccess = moviesList => ({
  type: moviesTypes.FETCH_MOVIES_SUCCESS,
  payload: moviesList
});

export const fetchMoviesFailure = errorMessage => ({
  type: moviesTypes.FETCH_MOVIES_START,
  payload: errorMessage
});
