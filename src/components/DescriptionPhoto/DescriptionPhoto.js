import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const AnimationText = keyframes`
  from{
    transform: translateX(-101%);
  }

  to{
    transform: translateX(0);

  }
`;

const AnimationTextLeave = keyframes`
  from{
    transform: translateX(0%);
  }

  to{
    transform: translateX(-101%);

  }
`;

export const StyledText = styled.div`
  width: 22vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateX(-101%);
  line-height: 1.3;
  background: ${({ theme }) => theme.cream};
  ${({ animation }) =>
    animation
      ? css`
          animation: ${AnimationText} 0.5s both;
        `
      : css`
          animation: ${AnimationTextLeave} 0.5s both;
        `}
`;

export const StyledH1 = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.brown};
  margin: 0 5% 5vh;
  font-size: ${({ theme }) => theme.size.m3};
  width: 90%;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: -8vh;
    right: -6%;
    width: 5vw;
    height: 1vh;
    background: ${({ theme }) => theme.brown};
  }
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.grey};
  width: 90%;
  margin: 0 5%;
  font-size: ${({ theme }) => theme.size.s3};
  position: relative;

  ::before {
    content: '';
    position: absolute;
    bottom: -8vh;
    left: -6%;
    width: 5vw;
    height: 1vh;
    background: ${({ theme }) => theme.brown};
  }
`;

const DescriptionPhoto = ({ title, description, animation }) => (
  <StyledText animation={animation}>
    <StyledH1>{title}</StyledH1>
    <StyledP>{description}</StyledP>
  </StyledText>
);

export default DescriptionPhoto;
