import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import MoviesList from '../components/MoviesList';

import {
  fetchMoviesSearchStart,
  getQueryValue
} from '../redux/movies/moviesActions';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

// ========================== STYLES:END ========================== //

// Component
const Search = ({ fetchMoviesSearchStart, getQueryValue, match, location }) => {
  const params = queryString.parse(location.search);

  useEffect(() => {
    getQueryValue(match.params.query);
    fetchMoviesSearchStart(params.page);
  }, [params.page, match.params.query]);
  return (
    <div>
      <Title>Result of searching: {match.params.query}</Title>
      <MoviesList />
    </div>
  );
};

export default compose(
  withRouter,
  connect(
    null,
    { fetchMoviesSearchStart, getQueryValue }
  )
)(Search);
