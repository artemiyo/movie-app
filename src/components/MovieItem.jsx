import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// ========================== STYLES:BEGIN ========================== //

const MovieLink = styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
    max-width: 29rem;
    color: var(--color-main);
    text-decoration: none;
    transition: all 0.3s ease;
    margin-bottom: 5rem;
  }

  &:hover {
    transform: scale(1.03);
    background-color: var(--color-sidebar);
    color: var(--color-hover);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 40rem;
  transition: all 0.3s ease;
`;

const MovieDetails = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const MovieTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  opacity: 0.7;
`;

const Rating = styled.span`
  font-weight: 400;
`;

// ========================== STYLES:END ========================== //

const MoviesItem = ({ imgUrl }) => {
  return (
    <MovieLink to='/'>
      <MovieImage src={imgUrl} alt='Title' />
      <MovieDetails>
        <MovieTitle>Title of the Movie</MovieTitle>
        <Rating>
          <Icon icon={faStar} />
          7.4
        </Rating>
      </MovieDetails>
    </MovieLink>
  );
};

export default MoviesItem;
