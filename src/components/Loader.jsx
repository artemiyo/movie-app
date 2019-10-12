import React from 'react';
import styled, { keyframes } from 'styled-components';

const roller = keyframes`
	0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RollerMain = styled.div`
  display: inline-block;
  position: relative;
  width: 6.4rem;
  height: 6.4rem;

  & div {
    animation: ${roller} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;

    &:nth-child(1) {
      animation-delay: -0.036s;

      &::after {
        top: 50px;
        left: 50px;
      }
    }

    &:nth-child(2) {
      animation-delay: -0.072s;

      &::after {
        top: 54px;
        left: 45px;
      }
    }

    &:nth-child(3) {
      animation-delay: -0.108s;

      &::after {
        top: 57px;
        left: 39px;
      }
    }

    &:nth-child(4) {
      animation-delay: -0.144s;

      &::after {
        top: 58px;
        left: 32px;
      }
    }

    &:nth-child(5) {
      animation-delay: -0.18s;

      &::after {
        top: 57px;
        left: 25px;
      }
    }

    &:nth-child(6) {
      animation-delay: -0.216s;

      &::after {
        top: 54px;
        left: 19px;
      }
    }

    &:nth-child(7) {
      animation-delay: -0.252s;

      &::after {
        top: 50px;
        left: 14px;
      }
    }

    &:nth-child(8) {
      animation-delay: -0.288s;

      &::after {
        top: 45px;
        left: 10px;
      }
    }

    &::after {
      content: ' ';
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #fff;
      margin: -3px 0 0 -3px;
      background-color: ${props => props.theme.colors.selected};
    }
  }
`;

const Loader = () => (
  <LoaderWrapper>
    <RollerMain>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </RollerMain>
  </LoaderWrapper>
);

export default Loader;
