import styled, { css, keyframes } from 'styled-components';

const AnimationLoad = keyframes`
  from{
    transform: translateX(0);
  }

  to{
    transform: translateX(100%);

  }
`;

const StyledLoad = styled.div`
  margin-top: 2vh;
  width: 64%;
  height: 10px;
  background: ${({ theme }) => theme.light_brown};
  position: relative;
  z-index: 300;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    background: ${({ theme }) => theme.brown};
    width: 100%;
    height: 100%;

    ${({ load }) =>
      load &&
      css`
        animation: ${AnimationLoad} 6s infinite linear;
      `}
  }
`;

export default StyledLoad;
