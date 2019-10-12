import navigationTypes from './navigationTypes';

const INITIAL_STATE = {
  isGenresLoading: true,
  genresList: [],
  errorMessage: '',
  navItemName: 'Popular'
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case navigationTypes.FETCH_GENRES_START:
      return {
        ...state,
        isGenresLoading: true
      };
    case navigationTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isGenresLoading: false,
        genresList: action.payload
      };
    case navigationTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        isGenresLoading: false,
        errorMessage: action.payload
      };
    case navigationTypes.GET_NAVIGATION_NAME:
      return {
        ...state,
        navItemName: action.payload
      };
    default:
      return state;
  }
};

export default navigationReducer;
