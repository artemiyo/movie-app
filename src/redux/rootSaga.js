import { all, call } from 'redux-saga/effects';

import { genresSaga } from './navigation/navigationSaga';
import { moviesSaga } from './movies/moviesSaga';
import { movieSaga } from './movie/movieSaga';
import { postersSaga } from './posters/postersSaga';

export default function* rootSaga() {
  yield all([
    call(genresSaga),
    call(moviesSaga),
    call(movieSaga),
    call(postersSaga)
  ]);
}
