import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.nav`
  width: 6%;
  background: ${({ theme }) => theme.brown};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  height: 100vh;
`;

const StyledBurger = styled.div`
  width: 50%;
  height: 6px;
  background: white;
  position: relative;
  top: 20px;
  left: 19px;

  ::before {
    content: '';
    position: absolute;
    width: 70%;
    right: 0;
    bottom: -17px;
    background: white;
    height: 100%;
  }

  ::after {
    content: '';
    background: white;
    bottom: -36px;
    width: 70%;
    right: 15%;
    position: absolute;
    height: 100%;
  }
`;

const MenuDesktop = () => <StyledMainWrapper />;

export default MenuDesktop;
