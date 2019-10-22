import { combineReducers } from 'redux';

import navigationReducer from './navigation/navigationReducer';
import moviesReducer from './movies/moviesReducer';
import movieReducer from './movie/movieReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  movies: moviesReducer,
  movie: movieReducer
});

export default rootReducer;
