import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import queryString from 'query-string';
import MoviesList from '../components/MoviesList';
import { animateScroll } from 'react-scroll';

import {
  fetchMoviesSearchStart,
  getQueryValue
} from '../redux/movies/moviesActions';
import { deleteMovieBackground } from '../redux/movie/movieActions';
import { selectMoviesList } from '../redux/movies/moviesSelectors';

import NoMovies from '../components/NoMovies';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

// ========================== STYLES:END ========================== //

// Component
const Search = ({
  fetchMoviesSearchStart,
  getQueryValue,
  match,
  location,
  movies,
  deleteMovieBackground
}) => {
  const params = queryString.parse(location.search);

  const { results, total_results } = movies;

  useEffect(() => {
    getQueryValue(match.params.query);
    deleteMovieBackground();
    fetchMoviesSearchStart(params.page);
    animateScroll.scrollToTop({
      smooth: true
    });
  }, [params.page, match.params.query]);

  if (total_results === 0 || !results) {
    return <NoMovies title={match.params.query} />;
  }

  return (
    <div>
      <Title>Result of searching: {match.params.query}</Title>
      <MoviesList />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movies: selectMoviesList
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { fetchMoviesSearchStart, getQueryValue, deleteMovieBackground }
  )
)(Search);
