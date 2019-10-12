import { all, call } from 'redux-saga/effects';

import { genresSaga } from './navigation/navigationSaga';

export default function* rootSaga() {
  yield all([call(genresSaga)]);
}
