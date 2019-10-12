import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import tmdb from '../../api/tmdb';

import { fetchMoviesSuccess, fetchMoviesFailure } from './moviesActions';
import moviesTypes from './moviesTypes';

export function* fetchMoviesAsync() {
  const getState = yield select();
  const movieCategory = getState.navigation.selectedMenu
    .toLowerCase()
    .replace(' ', '_');
  const response = yield tmdb.get(`/movie/${movieCategory}/`, {
    params: {
      api_key: process.env.REACT_APP_KEY
    }
  });
  try {
    yield put(fetchMoviesSuccess(response.data));
  } catch (err) {
    yield put(fetchMoviesFailure(err));
  }
}

export function* fetchMoviesStart() {
  yield takeLatest(moviesTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* moviesSaga() {
  yield all([call(fetchMoviesStart)]);
}
