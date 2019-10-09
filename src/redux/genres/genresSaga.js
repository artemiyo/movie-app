import { takeLatest, all, put, call } from 'redux-saga/effects';

import moviedbAPI from '../../api/moviedbAPI';

import { fetchGenresSuccess, fetchGenressFailure } from './genresActions';
import genresTypes from './genresTypes';

export function* fetchGenresAsync() {
  try {
    const response = yield moviedbAPI.get('/genre/movie/list');
    yield put(fetchGenresSuccess(response.data));
  } catch (err) {
    yield put(fetchGenressFailure(err));
  }
}

export function* fetchGenresStart() {
  yield takeLatest(genresTypes.FETCH_GENRES_START, fetchGenresAsync);
}

export function* genresSaga() {
  yield all([call(fetchGenresStart)]);
}
