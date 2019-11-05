import React, { useState } from 'react';
import styled from 'styled-components';

const MobileMenuWrapper = styled.div`
  cursor: pointer;
`;

const MenuBlock = styled.div`
  position: relative;
  width: 3rem;
  height: 3px;

  &:nth-child(2) {
    margin: 0.5rem 0;
  }
`;

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <MobileMenuWrapper toggle={toggle} onClick={() => setToggle(toggle)}>
      <MenuBlock />
      <MenuBlock />
      <MenuBlock />
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
