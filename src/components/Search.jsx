import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// ========================== STYLES:BEGIN ========================== //

const Form = styled.form`
  width: 50rem;
  height: 4rem;
  border-radius: 3rem;
  background-color: var(--color-main);
  opacity: 0.5;
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

  &::placeholder {
    color: var(--color-sidebar);
    font-family: 'Roboto', sans-serif;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  color: var(--color-body);
`;

// ========================== STYLES:END ========================== //

const Search = () => {
  return (
    <Form action='#'>
      <SearchIcon icon={faSearch} />
      <FormInput type='text' placeholder='Search Movie' />
    </Form>
  );
};

export default Search;
