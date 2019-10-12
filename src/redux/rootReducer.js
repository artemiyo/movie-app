import { combineReducers } from 'redux';

import navigationReducer from './navigation/navigationReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer
});

export default rootReducer;
