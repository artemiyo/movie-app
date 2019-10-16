import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import tmdb from '../../api/tmdb';

import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMoviesByGenresSuccess,
  fetchMoviesByGenresFailure
} from './moviesActions';
import moviesTypes from './moviesTypes';

// Fetch movies by discover category
export function* fetchMoviesAsync() {
  const getState = yield select();
  const movieCategory = getState.navigation.selectedMenu
    .toLowerCase()
    .replace(' ', '_');
  const page = getState.movies.page;
  const response = yield tmdb.get(`/movie/${movieCategory}/`, {
    params: {
      api_key: process.env.REACT_APP_KEY,
      page: page
    }
  });
  try {
    yield put(fetchMoviesSuccess(response.data));
  } catch (err) {
    yield put(fetchMoviesFailure(err));
  }
}

// Fetch movies by genre
export function* fetchMoviesByGenresAsync() {
  const getState = yield select();
  const genresList = getState.navigation.genresList.genres;
  const selectedMenu = getState.navigation.selectedMenu;
  const page = getState.movies.page;
  const genreId = genresList
    .filter(el => el.name.toLowerCase() === selectedMenu)
    .map(el => el.id)
    .join('');

  const response = yield tmdb.get(`/discover/movie/`, {
    params: {
      api_key: process.env.REACT_APP_KEY,
      with_genres: genreId,
      page: page
    }
  });

  try {
    yield put(fetchMoviesByGenresSuccess(response.data));
  } catch (err) {
    yield put(fetchMoviesByGenresFailure(err));
  }
}

export function* fetchMoviesStart() {
  yield takeLatest(moviesTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* fetchMoviesByGenresStart() {
  yield takeLatest(
    moviesTypes.FETCH_MOVIES_GENRES_START,
    fetchMoviesByGenresAsync
  );
}

export function* moviesSaga() {
  yield all([call(fetchMoviesStart), call(fetchMoviesByGenresStart)]);
}
