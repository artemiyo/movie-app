import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navigation from './Navigation';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 20%;
  padding: 6rem;
  background-color: var(--color-sidebar);
  z-index: 1;
  overflow-x: hidden;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div>
        <Logo />
        <Navigation />
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
