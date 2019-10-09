import genresTypes from './genresTypes';

export const fetchGenresStart = () => ({
  type: genresTypes.FETCH_GENRES_START
});

export const fetchGenresSuccess = genresList => ({
  type: genresTypes.FETCH_GENRES_SUCCESS,
  payload: genresList
});

export const fetchGenressFailure = errorMessage => ({
  type: genresTypes.FETCH_GENRES_FAILURE,
  payload: errorMessage
});
