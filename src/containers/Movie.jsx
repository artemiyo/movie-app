import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Loader from '../components/Loader';

import { fetchMovieStart, getMovieID } from '../redux/movie/movieActions';
import {
  selectIsMovieLoading,
  selectMovieItem
} from '../redux/movie/movieSelectors';

const MovieWrapper = styled.div`
  height: 80vh;
`;

const MovieMainInformation = styled.div`
  text-transform: uppercase;
`;

const MovieTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const MovieTagline = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const MovieDetails = styled.p`
  font-size: 1rem;
  font-weight: 100;
`;

const Movie = ({
  fetchMovieStart,
  getMovieID,
  match,
  movieItem,
  isMovieLoading
}) => {
  const {
    title,
    backdrop_path,
    tagline,
    budget,
    runtime,
    release_date
  } = movieItem;

  useEffect(() => {
    getMovieID(match.params.id);
    fetchMovieStart();
    return () => getMovieID();
  }, [match.params.id]);

  if (isMovieLoading) return <Loader />;

  return (
    <MovieWrapper imageUrl={backdrop_path}>
      <MovieMainInformation>
        <MovieTitle>{title}</MovieTitle>
        <MovieTagline>{tagline}</MovieTagline>
        <MovieDetails>
          {budget} $ / {release_date ? release_date.slice(0, 4) : ''}
        </MovieDetails>
      </MovieMainInformation>
    </MovieWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  movieItem: selectMovieItem,
  isMovieLoading: selectIsMovieLoading
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { fetchMovieStart, getMovieID }
  )
)(Movie);
