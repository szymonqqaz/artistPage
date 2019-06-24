import React from 'react';
import styled, { css } from 'styled-components';
import Load from 'components/Load/Load';

export const StyledWrapperLoad = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledWrapperElements = styled.div`
  height: 2vh;
  width: 16vh;
  display: flex;
  justify-content: space-between;
`;

export const OneElementLoad = styled.div`
  width: 2.5vh;
  height: 2vh;
  background: ${({ theme }) => theme.light_brown};

  ${({ activeElement, i }) =>
    activeElement === i &&
    css`
      background: ${({ theme }) => theme.brown};
    `}
`;

const renderEmelent = [0, 1, 2, 3];

const LoadAndNav = ({ activeElement, load }) => (
  <StyledWrapperLoad>
    <StyledWrapperElements>
      {renderEmelent.map((e, i) => (
        <OneElementLoad i={i} activeElement={activeElement} />
      ))}
    </StyledWrapperElements>
    <Load load={load} />
  </StyledWrapperLoad>
);

export default LoadAndNav;
