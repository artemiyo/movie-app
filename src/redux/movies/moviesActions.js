import moviesTypes from './moviesTypes';

// Actions for fetching movies by discover category

export const fetchMoviesStart = page => ({
  type: moviesTypes.FETCH_MOVIES_START,
  payload: page
});

export const fetchMoviesSuccess = moviesList => ({
  type: moviesTypes.FETCH_MOVIES_SUCCESS,
  payload: moviesList
});

export const fetchMoviesFailure = errorMessage => ({
  type: moviesTypes.FETCH_MOVIES_START,
  payload: errorMessage
});

// Actions for fetching movies by genres
export const fetchMoviesByGenresStart = page => ({
  type: moviesTypes.FETCH_MOVIES_GENRES_START,
  payload: page
});

export const fetchMoviesByGenresSuccess = moviesList => ({
  type: moviesTypes.FETCH_MOVIES_GENRES_SUCCESS,
  payload: moviesList
});

export const fetchMoviesByGenresFailure = errorMessage => ({
  type: moviesTypes.FETCH_MOVIES_GENRES_FAILURE,
  payload: errorMessage
});

export const nextPage = page => ({
  type: moviesTypes.NEXT_PAGE,
  payload: page + 1
});

export const prevPage = page => ({
  type: moviesTypes.PREV_PAGE,
  payload: page - 1
});
