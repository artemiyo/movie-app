import { combineReducers } from 'redux';

import navigationReducer from './navigation/navigationReducer';
import moviesReducer from './movies/moviesReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  movies: moviesReducer
});

export default rootReducer;
