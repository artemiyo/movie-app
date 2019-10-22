import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import tmdb from '../../api/tmdb';
import movieTypes from '../movie/movieTypes';

import { fetchMovieSuccess, fetchMovieError } from '../movie/movieActions';

export function* fetchMovieAsync() {
  const getState = yield select();
  const movieId = getState.movie.selectedMovieID;
  const response = yield tmdb.get(`/movie/${movieId}`, {
    params: {
      api_key: process.env.REACT_APP_KEY
    }
  });

  try {
    yield put(fetchMovieSuccess(response.data));
  } catch (err) {
    yield put(fetchMovieError(err));
  }
}

export function* fetchMovieStart() {
  yield takeLatest(movieTypes.FETCH_MOVIE_START, fetchMovieAsync);
}

export function* movieSaga() {
  yield all([call(fetchMovieStart)]);
}
