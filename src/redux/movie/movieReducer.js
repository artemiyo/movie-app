import movieTypes from './movieTypes';
import moviesTypes from '../movies/moviesTypes';

const INITIAL_STATE = {
  isMovieLoading: true,
  movieItem: {},
  selectedMovieID: null,
  errorMessage: ''
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
    case moviesTypes.FETCH_MOVIES_START:
    case moviesTypes.FETCH_MOVIES_GENRES_START:
    case moviesTypes.FETCH_MOVIES_SEARCH_START: {
      return {
        ...state,
        movieItem: {}
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
