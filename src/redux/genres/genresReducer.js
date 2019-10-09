import genresTypes from './genresTypes';

const INITIAL_STATE = {
  isGenresLoading: false,
  genresList: [],
  errorMessage: ''
};

const genresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case genresTypes.FETCH_GENRES_START:
      return {
        ...state,
        isGenresLoading: true
      };
    case genresTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isGenresLoading: false,
        genresList: action.payload
      };
    case genresTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        isGenresLoading: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default genresReducer;
