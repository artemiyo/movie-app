import navigationTypes from './navigationTypes';

const INITIAL_STATE = {
  isLoading: true,
  genresList: [],
  discoverList: [
    { id: 1, name: 'Popular' },
    { id: 2, name: 'Top Rated' },
    { id: 3, name: 'Upcoming' }
  ],
  errorMessage: '',
  selectedMenu: 'Popular'
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case navigationTypes.FETCH_GENRES_START:
      return {
        ...state,
        isLoading: true
      };
    case navigationTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genresList: action.payload
      };
    case navigationTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    case navigationTypes.GET_SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.payload
      };
    default:
      return state;
  }
};

export default navigationReducer;
