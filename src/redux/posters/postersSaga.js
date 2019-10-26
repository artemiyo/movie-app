import { takeLatest, all, put, call, select } from 'redux-saga/effects';

import tmdb from '../../api/tmdb';

import { fetchPostersSuccess, fetchPostersFailure } from './postersActions';
import postersTypes from './postersTypes';

// Worker Saga for getting genres
export function* fetchPostersAsync() {
  const getState = yield select();
  const movieId = getState.movie.selectedMovieID;
  const response = yield tmdb.get(`/movie/${movieId}/images`, {
    params: {
      api_key: process.env.REACT_APP_KEY,
      include_image_language: null
    }
  });

  try {
    yield put(fetchPostersSuccess(response.data.backdrops));
  } catch (err) {
    yield put(fetchPostersFailure(err));
  }
}

// Watcher Saga for getting genres
export function* fetchPostersStart() {
  yield takeLatest(postersTypes.FETCH_POSTERS_START, fetchPostersAsync);
}

export function* postersSaga() {
  yield all([call(fetchPostersStart)]);
}
