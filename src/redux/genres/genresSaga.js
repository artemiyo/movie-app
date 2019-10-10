import { takeLatest, all, put, call } from 'redux-saga/effects';

import { fetchGenresSuccess, fetchGenressFailure } from './genresActions';
import genresTypes from './genresTypes';

export function* fetchGenresAsync() {
  try {
    const response = yield fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}`
    );
    const data = yield response.json();
    yield put(fetchGenresSuccess(data));
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
