import moviesTypes from './moviesTypes';

const INITIAL_STATE = {
  isMoviesLoading: true,
  moviesList: [],
  errorMessage: '',
  query: '',
  page: 1,
  information: null
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesTypes.FETCH_MOVIES_START:
    case moviesTypes.FETCH_MOVIES_GENRES_START:
    case moviesTypes.FETCH_MOVIES_SEARCH_START:
      return {
        ...state,
        isMoviesLoading: true,
        page: action.payload
      };
    case moviesTypes.FETCH_MOVIES_SUCCESS:
    case moviesTypes.FETCH_MOVIES_GENRES_SUCCESS:
    case moviesTypes.FETCH_MOVIES_SEARCH_SUCCESS:
      return {
        ...state,
        isMoviesLoading: false,
        moviesList: action.payload
      };
    case moviesTypes.FETCH_MOVIES_FAILURE:
    case moviesTypes.FETCH_MOVIES_GENRES_FAILURE:
    case moviesTypes.FETCH_MOVIES_SEARCH_FAILURE:
      return {
        ...state,
        isMoviesLoading: false,
        errorMessage: action.payload
      };
    case moviesTypes.GET_QUERY_VALUE:
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
};

export default moviesReducer;
