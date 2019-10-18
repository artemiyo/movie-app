import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { getQueryValue } from '../redux/movies/moviesActions';

// ========================== STYLES:BEGIN ========================== //

const Form = styled.form`
  width: 50rem;
  height: 4rem;
  border-radius: 3rem;
  border: 1px solid ${props => props.theme.colors.main};
  opacity: 0.8;
  padding-left: 2rem;
`;

const FormInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  padding-left: 1rem;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.main};

  &::placeholder {
    color: ${props => props.theme.colors.main};
    font-family: 'Roboto', sans-serif;
    opacity: 0.5;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.main};
`;

// ========================== STYLES:END ========================== //

const SearchBar = ({ getQueryValue, history }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    getQueryValue(value);
    setValue('');
    history.push(`${process.env.PUBLIC_URL}/search/${value}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchIcon icon={faSearch} />
      <FormInput
        type='text'
        placeholder='Search Movie'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Form>
  );
};

export default compose(
  withRouter,
  connect(
    null,
    { getQueryValue }
  )
)(SearchBar);
