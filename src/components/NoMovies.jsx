import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

const NoMoviesWrapper = styled.div`
  text-align: center;
  margin-top: 20rem;
`;

const NoMoviesText = styled.p`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const NoMoviesTitle = styled.span`
  color: ${props => props.theme.colors.selected};
  text-decoration: underline;
`;

const NoMovies = ({ title }) => {
  return (
    <NoMoviesWrapper>
      <NoMoviesText>
        There are no movies with the title of{' '}
        <NoMoviesTitle>{title}</NoMoviesTitle>
      </NoMoviesText>
      <Link to='/'>
        <Button>Home</Button>
      </Link>
    </NoMoviesWrapper>
  );
};

export default NoMovies;
