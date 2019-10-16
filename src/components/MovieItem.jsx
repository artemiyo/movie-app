import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// ========================== STYLES:BEGIN ========================== //

const MovieLink = styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
    max-width: 25rem;
    color: ${props => props.theme.colors.main};
    text-decoration: none;
    margin-bottom: 4rem;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.03);
    background-color: ${props => props.theme.colors.sidebar};
    color: ${props => props.theme.colors.hover};
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 35rem;
`;

const MovieDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem 0;
`;

const MovieTitle = styled.h3`
  width: 70%;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  opacity: 0.7;
`;

const Rating = styled.span`
  font-weight: 400;
`;

// ========================== STYLES:END ========================== //

const MoviesItem = ({ movie }) => {
  const { title, vote_average, poster_path } = movie;
  return (
    <MovieLink to='/'>
      <MovieImage
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png'
        }
        alt={title}
      />
      <MovieDetails>
        <MovieTitle>{title}</MovieTitle>
        <Rating>
          <Icon icon={faStar} />
          {vote_average}
        </Rating>
      </MovieDetails>
    </MovieLink>
  );
};

export default MoviesItem;
