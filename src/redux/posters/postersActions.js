import postersTypes from './postersTypes';

// Begin fetching posters
export const fetchPostersStart = () => ({
  type: postersTypes.FETCH_POSTERS_START
});

// Get posters when the API call is successful
export const fetchPostersSuccess = postersList => ({
  type: postersTypes.FETCH_POSTERS_SUCCESS,
  payload: postersList
});

// Get an error message when the API call has a problem
export const fetchPostersFailure = errorMessage => ({
  type: postersTypes.FETCH_POSTERS_FAILURE,
  payload: errorMessage
});
