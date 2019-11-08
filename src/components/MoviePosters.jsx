import React from 'react';
import styled from 'styled-components';

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

const PostersList = styled.ul`
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
    overflow-x: scroll;
    margin-bottom: 1rem;
  }
`;

const PosterItem = styled.li`
  display: block;
  width: 35rem;
  height: 20rem;

  @media ${props => props.theme.mediaQueries.larger} {
    width: 28rem;
    height: 15rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
    height: 100%;
    &:not(:last-child) {
      margin-right: 3rem;
    }
  }

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const PosterImage = styled.img`
  width: 37rem;
  height: 21rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    width: 32rem;
    height: 19rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 24rem;
    height: 14rem;
  }
`;

// ========================== STYLES:END ========================== //

const MoviePosters = ({ posters }) => {
  if (posters.length === 0) return null;

  return (
    <div>
      <MovieSubTitle>Photos</MovieSubTitle>
      <PostersList>
        {posters.map(({ file_path }, idx) => (
          <PosterItem key={idx}>
            <PosterImage
              src={`https://image.tmdb.org/t/p/original${file_path}`}
              alt={`Frame${idx + 1}`}
            />
          </PosterItem>
        ))}
      </PostersList>
    </div>
  );
};

export default MoviePosters;
