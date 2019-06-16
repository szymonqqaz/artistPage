import styled, { css, keyframes } from 'styled-components';
import Icon from 'components/Icon/Icon';

const next = keyframes`
  from{
    transform: translateX(100%);
  }

  to{
    transform: translateX(0);
  }
`;

const nextLeft = keyframes`
  from{
    transform: translateX(-100%);
  }

  to{
    transform: translateX(0);
  }
`;

const leave = keyframes`
  from{
    transform: translateX(0);
  }

  to{
    transform: translateX(-100%);
  }
`;

const leaveLeft = keyframes`
  from{
    transform: translateX(0);
  }

  to{
    transform: translateX(100%);
  }
`;

const AnimationLoad = keyframes`
  from{
    transform: scaleX(0);
  }

  to{
    transform: scaleX(1) ;
  }
`;

export const StyledMainTemplate = styled.section`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  animation-duration: 0.8s;

  ${({ active }) => {
    switch (active) {
      case 'next':
        return css`
          animation-name: ${next};
          animation-timing-function: cubic-bezier(0.26, 0.69, 0.53, 1.37);
          animation-duration: 0.5s;
        `;
      case 'nextLeft':
        return css`
          animation-name: ${nextLeft};
          animation-timing-function: cubic-bezier(0.26, 0.69, 0.53, 1.37);
          animation-duration: 0.5s;
        `;
      case 'leave':
        return css`
          animation-name: ${leave};
          animation-duration: 0.8s;
        `;
      case 'leaveLeft':
        return css`
          animation-name: ${leaveLeft};
          animation-duration: 0.8s;
        `;
    }
  }}
`;

export const StyledMainText = styled.div`
  width: 92%;
  background: ${({ theme }) => theme.cream};
  padding: 30px 0;
  position: absolute;
  top: 12vh;
`;

export const StyledFirstP = styled.p`
  font-size: ${({ theme }) => theme.size.s3};
  color: ${({ theme }) => theme.brown};
  margin: 0 13px 11px;
`;

export const StyledSecoundP = styled.p`
  font-size: ${({ theme }) => theme.size.s1};
  color: ${({ theme }) => theme.grey};
  margin: 0 13px;
`;

export const StyledWrapperNav = styled.div`
  width: 85%;
  max-width: 360px;
  height: 88px;
  position: absolute;
  bottom: 12vh;
  right: 0;
  display: flex;

  z-index: 1000;
`;

export const StyledButton = styled.div`
  height: 100%;
  width: 88px;
  background: ${({ theme }) => theme.white};
  position: relative;
`;

export const StyledIcon = styled(Icon)`
  transform: scale(0.06) rotate(180deg) translate(-50%, -50%);
  width: 60px;
  height: 60px;
  font-size: 0.5rem;
  position: absolute;
  top: 25%;
  left: 25%;

  ${({ secound }) =>
    secound &&
    css`
      transform: scale(0.06) rotate(0) translate(100%, 100%);
      top: 0%;
      left: 0%;
    `}
`;

export const StyledCenterWrapper = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.trans_white};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledNumber = styled.p`
  font-size: ${({ theme }) => theme.size.s3};
  color: ${({ theme }) => theme.grey};
  margin: 0 0 10px;
`;

export const StyledLoad = styled.div`
  width: 64%;
  height: 10px;
  background: ${({ theme }) => theme.light_brown};
  position: relative;
  z-index: 300;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.brown};
    width: 100%;
    height: 100%;
    animation-iteration-count: infinite;
    animation-duration: 6s;
    animation-timing-function: linear;

    ${({ active }) =>
      active &&
      css`
        animation-name: ${AnimationLoad};
      `}
  }
`;
