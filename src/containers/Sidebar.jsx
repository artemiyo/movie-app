import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

// ========================== STYLES:BEGIN ========================== //

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 20%;
  padding: 5rem 5rem 3rem 5rem;
  background-color: ${props => props.theme.colors.sidebar};
  z-index: 1;
  overflow-x: hidden;

  @media ${props => props.theme.mediaQueries.larger} {
    width: 23%;
  }

  @media ${props => props.theme.mediaQueries.large} {
    left: -40%;
  }
`;

// ========================== STYLES:BEGIN ========================== //
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
