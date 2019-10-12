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
const Discover = ({ selectedMenu }) => {
  return (
    <div>
      <Title>{selectedMenu}</Title>
      <MoviesList />
    </div>
  );
};

const mapStateToProps = ({ navigation: { selectedMenu } }) => ({
  selectedMenu
});

export default connect(mapStateToProps)(Discover);
