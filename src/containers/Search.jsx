import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import queryString from 'query-string';
import MoviesList from '../components/MoviesList';

import { selectGetSelectedMenu } from '../redux/navigation/navigationSelectors';

import { fetchMoviesSearchStart } from '../redux/movies/moviesActions';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

// ========================== STYLES:END ========================== //

// Component
const Search = ({ query, fetchMoviesSearchStart, match, location }) => {
  const params = queryString.parse(location.search);
  console.log(params);
  // useEffect(() => {
  // 	fetchMoviesSearchStart()
  // }, []);
  return (
    <div>
      <Title>Result of searching {query}</Title>
      <MoviesList />
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({
  query: movies.inputValue
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchMoviesSearchStart }
  )(Search)
);
