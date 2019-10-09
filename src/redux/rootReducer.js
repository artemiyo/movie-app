import { combineReducers } from 'redux';

import genresReducer from './genres/genresReducer';

const rootReducer = combineReducers({
  genres: genresReducer
});

export default rootReducer;
