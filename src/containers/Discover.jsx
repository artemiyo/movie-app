import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import MoviesList from '../components/MoviesList';

import { fetchMoviesStart } from '../redux/movies/moviesActions';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

// ========================== STYLES:END ========================== //

// Component
const Discover = ({ selectedMenu, fetchMoviesStart }) => {
  useEffect(() => {
    fetchMoviesStart();
  }, [fetchMoviesStart]);
  return (
    <div>
      <Title>{selectedMenu}</Title>
      <MoviesList />
    </div>
  );
};

const mapStateToProps = ({ navigation }) => ({
  selectedMenu: navigation.selectedMenu
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchMoviesStart }
  )(Discover)
);
