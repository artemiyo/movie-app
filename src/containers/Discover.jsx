import React from 'react';
import { connect } from 'react-redux';
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
const Discover = ({ genreName }) => {
  return (
    <div>
      <Title>{genreName}</Title>
      <MoviesList />
    </div>
  );
};

const mapStateToProps = ({ genres: { genreName } }) => ({
  genreName
});

export default connect(mapStateToProps)(Discover);
