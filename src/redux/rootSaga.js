import { all, call } from 'redux-saga/effects';

import { genresSaga } from './genres/genresSaga';

export default function* rootSaga() {
  yield all([call(genresSaga)]);
}
