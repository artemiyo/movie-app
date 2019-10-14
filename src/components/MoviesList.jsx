import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MovieItem from './MovieItem';
import Loader from './Loader';

import {
  selectMoviesList,
  selectIsMoviesLoading
} from '../redux/movies/moviesSelectors';

// ========================== STYLES:BEGIN ========================== //

const MovieList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 6rem;
`;

// ========================== STYLES:BEGIN ========================== //

const MoviesList = ({ movies, isMoviesLoading }) => {
  return isMoviesLoading ? (
    <Loader />
  ) : (
    <MovieList>
      {movies.results.map((movie, idx) => (
        <MovieItem key={movie.id} movie={movie} idx={idx} />
      ))}
    </MovieList>
  );
};

const mapStateToProps = createStructuredSelector({
  movies: selectMoviesList,
  isMoviesLoading: selectIsMoviesLoading
});

export default connect(mapStateToProps)(MoviesList);
