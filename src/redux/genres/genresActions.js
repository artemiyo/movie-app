import genresTypes from './genresTypes';

// Begin fetching genres
export const fetchGenresStart = () => ({
  type: genresTypes.FETCH_GENRES_START
});

// Get genres when the API call is successful
export const fetchGenresSuccess = genresList => ({
  type: genresTypes.FETCH_GENRES_SUCCESS,
  payload: genresList
});

// Get an error message when the API call has a problem
export const fetchGenressFailure = errorMessage => ({
  type: genresTypes.FETCH_GENRES_FAILURE,
  payload: errorMessage
});

export const getGenresName = name => ({
  type: genresTypes.GET_GENRE_NAME,
  payload: name
});
