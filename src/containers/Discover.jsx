import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import queryString from 'query-string';
import { animateScroll } from 'react-scroll';

import MoviesList from '../components/MoviesList';

import { getSelectedMenu } from '../redux/navigation/navigationActions';
import { fetchMoviesStart } from '../redux/movies/moviesActions';
import { deleteMovieBackground } from '../redux/movie/movieActions';

import { selectGetSelectedMenu } from '../redux/navigation/navigationSelectors';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;

  @media ${props => props.theme.mediaQueries.large} {
    font-size: 2rem;
  }
`;

// ========================== STYLES:END ========================== //

// Component
const Discover = ({
  selectedMenu,
  fetchMoviesStart,
  match,
  location,
  getSelectedMenu,
  deleteMovieBackground
}) => {
  const params = queryString.parse(location.search);
  useEffect(() => {
    getSelectedMenu(match.params.name);
    deleteMovieBackground();
    fetchMoviesStart(params.page);

    animateScroll.scrollToTop({
      smooth: true
    });
    return () => fetchMoviesStart();
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
    { fetchMoviesStart, getSelectedMenu, deleteMovieBackground }
  )
)(Discover);
