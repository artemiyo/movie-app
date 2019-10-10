import React from 'react';
import styled from 'styled-components';

import MoviesList from '../components/MoviesList';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

// ========================== STYLES:END ========================== //

// Component
const Movies = () => {
  return (
    <div>
      <Title>Popular</Title>
      <MoviesList />
    </div>
  );
};

export default Movies;
