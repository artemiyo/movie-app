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
    position: fixed;
    width: 40%;
    left: ${props => {
      if (props.isToggle) {
        return `0`;
      } else {
        return `-100%`;
      }
    }};
    transition: left 0.2s ease-in;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 50%;
  }

  @media ${props => props.theme.mediaQueries.small} {
    width: 60%;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    width: 80%;
  }
`;

// ========================== STYLES:BEGIN ========================== //
const Sidebar = ({ isToggle }) => {
  return (
    <SidebarWrapper isToggle={isToggle}>
      <div>
        <Logo />
        <Navigation />
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
