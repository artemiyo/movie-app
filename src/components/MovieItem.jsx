import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Loader from './Loader';
import MoviesImage from './MoviesImage';

// ========================== STYLES:BEGIN ========================== //

const MovieLink = styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
    width: 25rem;
    color: ${props => props.theme.colors.main};
    text-decoration: none;
    margin-bottom: 4rem;
    transition: all 0.3s ease;
    border: ${props => {
      if (props.poster) {
        return `2px solid transparent`;
      } else {
        return `2px solid ${props.theme.colors.sidebar}`;
      }
    }};
  }

  &:hover {
    transform: scale(1.03);
    background-color: ${props => props.theme.colors.sidebar};
    color: ${props => props.theme.colors.hover};
    border: 2px solid ${props => props.theme.colors.hover};
  }
`;

const MovieImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: 35rem;
`;

const ImageLoading = styled.div`
  position: absolute;
  width: 25rem;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    return () => setIsImageLoaded(false);
  }, []);

  const { title, vote_average, poster_path } = movie;
  return (
    <MovieLink
      poster={poster_path}
      to={`${process.env.PUBLIC_URL}/movie/${movie.id}`}>
      <MovieImageWrapper>
        {!isImageLoaded ? (
          <ImageLoading>
            <Loader />
          </ImageLoading>
        ) : null}
        <MoviesImage
          setIsImageLoaded={() => setIsImageLoaded(true)}
          poster={poster_path}
          title={title}
        />
      </MovieImageWrapper>

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
