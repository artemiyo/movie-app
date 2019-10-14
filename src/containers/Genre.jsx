import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import MoviesList from '../components/MoviesList';

import { getSelectedMenu } from '../redux/navigation/navigationActions';
import { selectGetSelectedMenu } from '../redux/navigation/navigationSelectors';

// ========================== STYLES:BEGIN ========================== //

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

// ========================== STYLES:END ========================== //

// Component
const Genre = ({ selectedMenu, getSelectedMenu, match }) => {
  useEffect(() => {
    getSelectedMenu(match.params.name);
  }, [match.params.name]);
  return (
    <div>
      <Title>{selectedMenu}</Title>
      <MoviesList />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedMenu: selectGetSelectedMenu
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSelectedMenu }
  )(Genre)
);
