import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';
import Button from '../components/Button';

import { fetchMovieStart, getMovieID } from '../redux/movie/movieActions';
import {
  selectIsMovieLoading,
  selectMovieItem
} from '../redux/movie/movieSelectors';

const MovieWrapper = styled.div`
  height: 100vh;
`;

const MovieMain = styled.div`
  width: 80%;
`;

const MovieMainInformation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovieTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const MovieTagline = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  width: 90%;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const MovieDetails = styled.p`
  font-size: 1.6rem;
  font-weight: 100;
`;

const MovieOverviewWrapper = styled.div`
  margin: 4rem 0;
`;

const MovieSubTitle = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const MovieOverview = styled.p`
  font-size: 1.6rem;
  font-weight: 100;
  width: 70%;
  line-height: 1.8em;
`;

const GenresList = styled.ul`
  display: flex;
  margin-bottom: 4rem;
`;

const GenreLink = styled(Link)`
  &:link,
  &:visited {
    font-size: 1.6rem;
    font-weight: 100;
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.colors.main};

    &:not(:last-child) {
      margin-right: 1.5rem;
    }

    &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`;

const GenreItem = styled.li`
  display: block;
`;

const LinkToHome = styled(Link)`
  display: block;
`;

const MovieGenres = styled.div`
  margin-bottom: 4rem;
`;

const MovieProduction = styled.div`
  margin-bottom: 4rem;
`;

const MovieProductionCompany = styled.ul``;

const MovieItemProduction = styled.li`
  font-size: 1.6rem;
  font-weight: 100;
  display: block;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
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
    release_date,
    overview,
    genres,
    production_companies
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
        <MovieMain>
          <MovieTitle>{title}</MovieTitle>
          <MovieTagline>{tagline}</MovieTagline>
          <MovieDetails>
            {release_date ? release_date.slice(0, 4) : ''}
          </MovieDetails>
          <MovieOverviewWrapper>
            <MovieSubTitle>Overview</MovieSubTitle>
            <MovieOverview>{overview}</MovieOverview>
          </MovieOverviewWrapper>
          <MovieProduction>
            <MovieSubTitle>Production Companies</MovieSubTitle>
            <MovieProductionCompany>
              {production_companies.map(({ name, id }) => (
                <MovieItemProduction key={id}>{name}</MovieItemProduction>
              ))}
            </MovieProductionCompany>
          </MovieProduction>
          <MovieGenres>
            <MovieSubTitle>Genres</MovieSubTitle>
            <GenresList>
              {genres.map(({ name, id }) => (
                <GenreLink
                  key={id}
                  to={`${process.env.PUBLIC_URL}/genres/${name.toLowerCase()}`}>
                  <GenreItem>{name}</GenreItem>
                </GenreLink>
              ))}
            </GenresList>
          </MovieGenres>
        </MovieMain>
        <div></div>
      </MovieMainInformation>

      <LinkToHome to={`${process.env.PUBLIC_URL}/`}>
        <Button>Home</Button>
      </LinkToHome>
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
