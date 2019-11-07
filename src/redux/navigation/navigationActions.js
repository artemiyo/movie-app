import navigationTypes from './navigationTypes';

// Begin fetching genres
export const fetchGenresStart = () => ({
  type: navigationTypes.FETCH_GENRES_START
});

// Get genres when the API call is successful
export const fetchGenresSuccess = genresList => ({
  type: navigationTypes.FETCH_GENRES_SUCCESS,
  payload: genresList
});

// Get an error message when the API call has a problem
export const fetchGenressFailure = errorMessage => ({
  type: navigationTypes.FETCH_GENRES_FAILURE,
  payload: errorMessage
});

export const getSelectedMenu = name => ({
  type: navigationTypes.GET_SELECTED_MENU,
  payload: name
});

export const getMenuId = id => ({
  type: navigationTypes.GET_MENU_ID,
  payload: id
});

export const toggleMobileMenu = () => ({
  type: navigationTypes.TOGGLE_MOBILE_MENU
});
