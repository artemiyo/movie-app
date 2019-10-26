import { combineReducers } from 'redux';

import navigationReducer from './navigation/navigationReducer';
import moviesReducer from './movies/moviesReducer';
import movieReducer from './movie/movieReducer';
import postersReducer from './posters/postersReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  movies: moviesReducer,
  movie: movieReducer,
  posters: postersReducer
});

export default rootReducer;
