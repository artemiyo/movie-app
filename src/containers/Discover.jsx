import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import queryString from 'query-string';

import MoviesList from '../components/MoviesList';

import { getSelectedMenu } from '../redux/navigation/navigationActions';
import { fetchMoviesStart } from '../redux/movies/moviesActions';

import { selectGetSelectedMenu } from '../redux/navigation/navigationSelectors';
import Pagination from '../components/Pagination';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

// ========================== STYLES:END ========================== //

// Component
const Discover = ({
  selectedMenu,
  fetchMoviesStart,
  match,
  location,
  getSelectedMenu
}) => {
  const params = queryString.parse(location.search);
  useEffect(() => {
    getSelectedMenu(match.params.name);
    fetchMoviesStart(params.page);
    return () => getSelectedMenu();
  }, [match.params.name, params.page]);

  return (
    <div>
      <Title>{selectedMenu}</Title>
      <MoviesList />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedMenu: selectGetSelectedMenu
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchMoviesStart, getSelectedMenu }
  )(Discover)
);
