import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ========================== STYLES:BEGIN ========================== //

const MovieSubTitle = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.1rem;
  }
`;

const MovieGenresWrapper = styled.div`
  margin-bottom: 4rem;
`;

const GenresList = styled.ul`
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

    @media ${props => props.theme.mediaQueries.smaller} {
      font-size: 1rem;
    }

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

// ========================== STYLES:END ========================== //

const MovieGenres = ({ genres }) => {
  if (genres.length === 0) return null;

  return (
    <MovieGenresWrapper>
      <MovieSubTitle>Genres</MovieSubTitle>
      <GenresList>
        {genres.map(({ name, id }) => (
          <GenreLink
            key={id}
            to={`${process.env.PUBLIC_URL}/genres/${name.toLowerCase()}`}
          >
            <GenreItem>{name}</GenreItem>
          </GenreLink>
        ))}
      </GenresList>
    </MovieGenresWrapper>
  );
};

export default MovieGenres;
