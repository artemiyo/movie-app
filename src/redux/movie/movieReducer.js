import movieTypes from './movieTypes';

const INITIAL_STATE = {
  isMovieLoading: true,
  movieItem: {},
  selectedMovieID: null,
  errorMessage: '',
  movieBackground: false
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieTypes.FETCH_MOVIE_START:
      return {
        ...state,
        isMovieLoading: true
      };
    case movieTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isMovieLoading: false,
        movieItem: action.payload
      };
    case movieTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isMovieLoading: false,
        errorMessage: action.payload
      };
    case movieTypes.GET_MOVIE_ID:
      return {
        ...state,
        selectedMovieID: action.payload
      };
    case movieTypes.SET_MOVIE_BACKGROUND:
      return {
        ...state,
        movieBackground: true
      };
    case movieTypes.DELETE_MOVIE_BACKGROUND:
      return {
        ...state,
        movieBackground: false
      };
    default:
      return state;
  }
};

export default movieReducer;
