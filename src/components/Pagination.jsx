import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

// ========================== STYLES:BEGIN ========================== //

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => {
    switch (props.type) {
      case 'next':
        return 'flex-end';
      case 'prev':
        return 'flex-start';
      default:
        return 'space-between';
    }
  }};
`;

// ========================== STYLES:END ========================== //

const Pagination = ({ movies }) => {
  const { page, total_pages, results } = movies;

  if (total_pages === 1) {
    return null;
  }

  if (total_pages === 0 || !results) {
    return (
      <PaginationWrapper>
        <Link to='/'>
          <Button>Home</Button>
        </Link>
      </PaginationWrapper>
    );
  }

  if (page < total_pages && page === 1) {
    return (
      <PaginationWrapper type='next'>
        <Link to={`${process.env.PUBLIC_URL}?page=${page + 1}`}>
          <Button>Next Page</Button>
        </Link>
      </PaginationWrapper>
    );
  } else if (page < total_pages) {
    return (
      <PaginationWrapper>
        <Link to={`${process.env.PUBLIC_URL}?page=${page - 1}`}>
          <Button>Prev Page</Button>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}?page=${page + 1}`}>
          <Button>Next Page</Button>
        </Link>
      </PaginationWrapper>
    );
  } else {
    return (
      <PaginationWrapper type='prev'>
        <Link to={`${process.env.PUBLIC_URL}?page=${page - 1}`}>
          <Button>Prev Page</Button>
        </Link>
      </PaginationWrapper>
    );
  }
};

export default Pagination;
