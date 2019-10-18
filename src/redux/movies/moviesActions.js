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

// Actions for pagination

export const nextPage = page => ({
  type: moviesTypes.NEXT_PAGE,
  payload: page + 1
});

export const prevPage = page => ({
  type: moviesTypes.PREV_PAGE,
  payload: page - 1
});

// Actions for fetching movies by searching

export const fetchMoviesSearchStart = page => ({
  type: moviesTypes.FETCH_MOVIES_SEARCH_START,
  payload: page
});

export const fetchMoviesSearchSuccess = moviesList => ({
  type: moviesTypes.FETCH_MOVIES_SEARCH_SUCCESS,
  payload: moviesList
});

export const fetchMoviesSearchFailure = errorMessage => ({
  type: moviesTypes.FETCH_MOVIES_SEARCH_FAILURE,
  payload: errorMessage
});

// Get the value from the search bar input

export const getQueryValue = query => ({
  type: moviesTypes.GET_QUERY_VALUE,
  payload: query
});
