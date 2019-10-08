import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Form = styled.form`
  width: 50rem;
`;

const FormInput = styled.input`
  width: 100%;
`;

const Search = () => {
  return (
    <Form action='#'>
      <FontAwesomeIcon icon={faSearch} />
      <FormInput type='text' placeholder='Search Movie' />
    </Form>
  );
};

export default Search;
