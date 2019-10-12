import { takeLatest, all, put, call } from 'redux-saga/effects';

import tmdb from '../../api/tmdb';

import { fetchGenresSuccess, fetchGenressFailure } from './navigationActions';
import navigationTypes from './navigationTypes';

// Worker Saga for getting genres
export function* fetchGenresAsync() {
  const response = yield tmdb.get('/genre/movie/list', {
    params: {
      api_key: process.env.REACT_APP_KEY
    }
  });
  try {
    yield put(fetchGenresSuccess(response.data));
  } catch (err) {
    yield put(fetchGenressFailure(err));
  }
}

// Watcher Saga for getting genres
export function* fetchGenresStart() {
  yield takeLatest(navigationTypes.FETCH_GENRES_START, fetchGenresAsync);
}

export function* genresSaga() {
  yield all([call(fetchGenresStart)]);
}
