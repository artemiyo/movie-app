import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

import Loader from '../components/Loader';
import Button from '../components/Button';
import MovieOverview from '../components/MovieOverview';
import MovieProduction from '../components/MovieProduction';
import MovieGenres from '../components/MovieGenres';
import MoviePosters from '../components/MoviePosters';

import {
  fetchMovieStart,
  getMovieID,
  setMovieBackground
} from '../redux/movie/movieActions';
import { fetchPostersStart } from '../redux/posters/postersActions';
import {
  selectIsMovieLoading,
  selectMovieItem
} from '../redux/movie/movieSelectors';
import {
  selectPostersList,
  sellectIsPostersLoading
} from '../redux/posters/postersSelectors';

const MovieWrapper = styled.div``;

const MovieMain = styled.div`
  width: 80%;

  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;

const MovieMainInformation = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;

const MovieTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media ${props => props.theme.mediaQueries.larger} {
    font-size: 3rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 2rem;
  }
`;

const MovieTagline = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  width: 90%;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.4rem;
    width: 100%;
  }
`;

const MovieDetails = styled.p`
  font-size: 1.3rem;
  font-weight: 100;

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1rem;
  }
`;

const LinkToHome = styled(Link)`
  display: inline-block;
`;

const Movie = ({
  fetchMovieStart,
  fetchPostersStart,
  getMovieID,
  match,
  movieItem,
  postersList,
  isPostersLoading,
  isMovieLoading,
  setMovieBackground
}) => {
  const {
    title,
    tagline,
    release_date,
    overview,
    genres,
    production_companies
  } = movieItem;

  useEffect(() => {
    getMovieID(match.params.id);
    fetchMovieStart();
    animateScroll.scrollToTop({
      smooth: true
    });
    setMovieBackground();
    fetchPostersStart();
    return () => fetchMovieStart();
  }, [match.params.id]);

  if (isMovieLoading || isPostersLoading) return <Loader />;

  return (
    <MovieWrapper>
      <MovieMainInformation>
        <MovieMain>
          <MovieTitle>{title}</MovieTitle>
          <MovieTagline>{tagline}</MovieTagline>
          <MovieDetails>
            {release_date ? release_date.slice(0, 4) : ''}
          </MovieDetails>
          <MovieOverview overview={overview} />
          <MovieProduction companies={production_companies} />
          <MovieGenres genres={genres} />
        </MovieMain>
        <MoviePosters posters={postersList} />
      </MovieMainInformation>

      <LinkToHome to={`${process.env.PUBLIC_URL}/`}>
        <Button>Home</Button>
      </LinkToHome>
    </MovieWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  movieItem: selectMovieItem,
  isMovieLoading: selectIsMovieLoading,
  postersList: selectPostersList,
  isPostersLoading: sellectIsPostersLoading
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { fetchMovieStart, getMovieID, fetchPostersStart, setMovieBackground }
  )
)(Movie);
