import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggleMobileMenu } from '../redux/navigation/navigationActions';

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
      if (props.isToggle) {
        return `40%`;
      } else {
        return `100%`;
      }
    }};
    transform: ${props => {
      if (props.isToggle) {
        return `rotate(45deg)`;
      } else {
        return `rotate(0)`;
      }
    }};
  }

  & > div:nth-child(2) {
    position: relative;
    opacity: ${props => {
      if (props.isToggle) {
        return `0`;
      } else {
        return `1`;
      }
    }};
  }

  & > div:nth-child(3) {
    position: absolute;
    top: ${props => {
      if (props.isToggle) {
        return `40%`;
      } else {
        return `100%`;
      }
    }};
    transform: ${props => {
      if (props.isToggle) {
        return `rotate(-45deg)`;
      } else {
        return `rotate(0)`;
      }
    }};
  }
`;

const MenuBlock = styled.div`
  position: relative;
  width: 2rem;
  height: 2px;
  background-color: ${props => props.theme.colors.main};

  &:nth-child(2) {
    margin: 0.5rem 0;
  }
`;

const MobileMenu = ({ isToggle, toggleMobileMenu }) => {
  return (
    <MobileMenuWrapper isToggle={isToggle} onClick={() => toggleMobileMenu()}>
      <MenuBlock />
      <MenuBlock />
      <MenuBlock />
    </MobileMenuWrapper>
  );
};

const mapStateToProps = ({ navigation: { isToggle } }) => {
  return {
    isToggle
  };
};

export default connect(
  mapStateToProps,
  { toggleMobileMenu }
)(MobileMenu);
