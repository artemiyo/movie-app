import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import queryString from 'query-string';
import { animateScroll } from 'react-scroll';

import MoviesList from '../components/MoviesList';

import { fetchMoviesByGenresStart } from '../redux/movies/moviesActions';

import { getSelectedMenu } from '../redux/navigation/navigationActions';
import { selectGetSelectedMenu } from '../redux/navigation/navigationSelectors';
import { deleteMovieBackground } from '../redux/movie/movieActions';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

// ========================== STYLES:END ========================== //

// Component
const Genre = ({
  selectedMenu,
  getSelectedMenu,
  fetchMoviesByGenresStart,
  match,
  location,
  deleteMovieBackground
}) => {
  const params = queryString.parse(location.search);
  useEffect(() => {
    getSelectedMenu(match.params.name);
    deleteMovieBackground();
    fetchMoviesByGenresStart(params.page);

    animateScroll.scrollToTop({
      smooth: true
    });
    return () => fetchMoviesByGenresStart();
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

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getSelectedMenu, fetchMoviesByGenresStart, deleteMovieBackground }
  )
)(Genre);
