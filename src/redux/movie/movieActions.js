import movieTypes from './movieTypes';

export const fetchMovieStart = () => ({
  type: movieTypes.FETCH_MOVIE_START
});

export const fetchMovieSuccess = item => ({
  type: movieTypes.FETCH_MOVIE_SUCCESS,
  payload: item
});

export const fetchMovieError = errorMessage => ({
  type: movieTypes.FETCH_MOVIE_FAILURE,
  payload: errorMessage
});

export const getMovieID = id => ({
  type: movieTypes.GET_MOVIE_ID,
  payload: id
});

export const setMovieBackground = () => ({
  type: movieTypes.SET_MOVIE_BACKGROUND
});

export const deleteMovieBackground = () => ({
  type: movieTypes.DELETE_MOVIE_BACKGROUND
});
