import React from 'react';
import styled from 'styled-components';

// ========================== STYLES:BEGIN ========================== //

const MovieSubTitle = styled.h3`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const PostersList = styled.ul``;

const PosterItem = styled.li`
  display: block;
  width: 35rem;
  height: 20rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
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
