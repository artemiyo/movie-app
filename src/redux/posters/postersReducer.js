import postersTypes from './postersTypes';

const INITIAL_STATE = {
  isPostersLoading: true,
  postersList: [],
  errorMessage: ''
};

const postersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postersTypes.FETCH_POSTERS_START:
      return {
        ...state,
        isPostersLoading: true
      };
    case postersTypes.FETCH_POSTERS_SUCCESS:
      return {
        ...state,
        isPostersLoading: false,
        postersList: action.payload
      };
    case postersTypes.FETCH_POSTERS_FAILURE:
      return {
        ...state,
        isPostersLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default postersReducer;
