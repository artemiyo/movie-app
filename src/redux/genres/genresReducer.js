import genresTypes from './genresTypes';

const INITIAL_STATE = {
  isGenresLoading: true,
  genresList: [],
  errorMessage: '',
  genreName: 'Popular'
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
    case genresTypes.GET_GENRE_NAME:
      return {
        ...state,
        genreName: action.payload
      };
    default:
      return state;
  }
};

export default genresReducer;
