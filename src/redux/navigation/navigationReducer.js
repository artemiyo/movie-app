import navigationTypes from './navigationTypes';

const INITIAL_STATE = {
  isNavigationLoading: true,
  genresList: [],
  discoverList: [
    { id: 1, name: 'Popular' },
    { id: 2, name: 'Top Rated' },
    { id: 3, name: 'Upcoming' }
  ],
  errorMessage: '',
  selectedMenu: '',
  isToggle: false
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case navigationTypes.FETCH_GENRES_START:
      return {
        ...state,
        isNavigationLoading: true
      };
    case navigationTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isNavigationLoading: false,
        genresList: action.payload
      };
    case navigationTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        isNavigationLoading: false,
        errorMessage: action.payload
      };
    case navigationTypes.GET_SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.payload,
        isToggle: false
      };
    case navigationTypes.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isToggle: !state.isToggle
      };
    default:
      return state;
  }
};

export default navigationReducer;
