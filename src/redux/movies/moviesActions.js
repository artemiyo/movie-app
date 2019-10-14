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

export const fetchMoviesByGenresStart = () => ({
  type: moviesTypes.FETCH_MOVIES_GENRES_START
});

export const fetchMoviesByGenresSuccess = moviesList => ({
  type: moviesTypes.FETCH_MOVIES_GENRES_SUCCESS,
  payload: moviesList
});

export const fetchMoviesByGenresFailure = errorMessage => ({
  type: moviesTypes.FETCH_MOVIES_GENRES_FAILURE,
  payload: errorMessage
});
