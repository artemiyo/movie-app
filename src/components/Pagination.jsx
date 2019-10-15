import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Pagination = () => {
  return (
    <PaginationWrapper>
      <Button>Page 1</Button>
      <Button>Page 2</Button>
    </PaginationWrapper>
  );
};

export default Pagination;
