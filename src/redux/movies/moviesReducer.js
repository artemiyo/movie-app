import moviesTypes from './moviesTypes';

const INITIAL_STATE = {
  isMoviesLoading: true,
  moviesList: [],
  errorMessage: ''
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesTypes.FETCH_MOVIES_START:
    case moviesTypes.FETCH_MOVIES_GENRES_START:
      return {
        ...state,
        isMoviesLoading: true
      };
    case moviesTypes.FETCH_MOVIES_SUCCESS:
    case moviesTypes.FETCH_MOVIES_GENRES_SUCCESS:
      return {
        ...state,
        isMoviesLoading: false,
        moviesList: action.payload
      };
    case moviesTypes.FETCH_MOVIES_FAILURE:
    case moviesTypes.FETCH_MOVIES_GENRES_FAILURE:
      return {
        ...state,
        isMoviesLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default moviesReducer;
