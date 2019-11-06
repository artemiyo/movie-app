import React, { useState } from 'react';
import styled from 'styled-components';

const MobileMenuWrapper = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 999;

  & > div {
    transition: all 0.1s ease;
  }

  & > div:nth-child(1) {
    position: absolute;
    bottom: ${props => {
      if (props.toggle) {
        return `46%`;
      } else {
        return `100%`;
      }
    }};
    transform: ${props => {
      if (props.toggle) {
        return `rotate(45deg)`;
      } else {
        return `rotate(0)`;
      }
    }};
  }

  & > div:nth-child(2) {
    position: relative;
    opacity: ${props => {
      if (props.toggle) {
        return `0`;
      } else {
        return `1`;
      }
    }};
  }

  & > div:nth-child(3) {
    position: absolute;
    top: ${props => {
      if (props.toggle) {
        return `34%`;
      } else {
        return `100%`;
      }
    }};
    transform: ${props => {
      if (props.toggle) {
        return `rotate(-45deg)`;
      } else {
        return `rotate(0)`;
      }
    }};
  }
`;

const MenuBlock = styled.div`
  position: relative;
  width: 3rem;
  height: 3px;
  background-color: ${props => props.theme.colors.main};

  &:nth-child(2) {
    margin: 0.5rem 0;
  }
`;

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <MobileMenuWrapper toggle={toggle} onClick={() => setToggle(!toggle)}>
      <MenuBlock />
      <MenuBlock />
      <MenuBlock />
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
