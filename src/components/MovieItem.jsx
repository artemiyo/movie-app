import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// ========================== STYLES:BEGIN ========================== //

const fadeIn = keyframes`
	0% {
		opacity: 0;
		transform: translateY(100%);
	}
	20% {
		opacity: 0.2
	}
	40% {
		opacity: 0.4
	}
	60% {
		opacity: 0.6
	}
	80% {
		opacity: 0.8
	}
	100% {
		opacity: 1
		transform: translateY(0);
	}
`;

const MovieLink = styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
    max-width: 25rem;
    color: ${props => props.theme.colors.main};
    text-decoration: none;
    margin-bottom: 4rem;
    animation: ${fadeIn} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    animation-delay: ${props => `${0.03 * props.idx}s`};
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
  height: 37rem;
  transition: all 0.3s ease;
`;

const MovieDetails = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const MovieTitle = styled.h3`
  font-size: 1.6rem;
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

const MoviesItem = ({ movie, idx }) => {
  const { title, vote_average, poster_path } = movie;
  return (
    <MovieLink idx={idx} to='/'>
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
