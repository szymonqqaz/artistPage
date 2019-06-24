import styled, { css, keyframes } from 'styled-components';
import Icon from 'components/Icon/Icon';
import media from 'assets/styles/media';

const AnimtionLoadImages = keyframes`
  from{
    transform: translateX(100%);
  }

  to{
    transform: translateX(0);
  }
`;

const AnimationLoad = keyframes`
  from{
    transform: translateX(0);
  }

  to{
    transform: translateX(100%);

  }
`;

const AnimationSideBar = keyframes`
  from{
    transform: translateY(100%);
  }
  to{
    transform: translateY(0);
  }
`;

const AnimationNuber = keyframes`
  from{
    transform: translateY(-100%);
  }

  to{
    transform: translateY(0);
  }
`;

const AnimationNuber2 = keyframes`
  from{
    transform: translateY(0);
  }

  to{
    transform: translateY(100%);
  }
`;

export const StyledMainWrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  ${media.desktop`
    display: block;
  `}
  display: none;
`;

export const StyeldWrapperPosit = styled.div`
  height: 91vh;
  width: 94%;
  overflow: hidden;
  position: absolute;
  left: 6%;
  top: 0;
`;

export const StyledContentWrapper = styled.div`
  height: 91vh;
  position: absolute;
  left: 0%;
  top: 0;
  display: flex;
  animation: ${AnimtionLoadImages} 0.5s;
  transform: translateX(${({ posit }) => posit}vw);

  transition: transform 1s 0.5s;
`;

export const StyledPhoto = styled.div`
  width: 61vw;
  height: 100%;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 2000;

  ::before {
    content: '+ czytaj o tym';
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2% 4%;
    background: ${({ theme }) => theme.trans_white};
    cursor: pointer;
  }
`;

export const StyledBar = styled.div`
  height: 9vh;
  width: 94%;
  position: absolute;
  top: 91vh;
  z-index: 9000;
  left: 6%;
  background: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);

  animation: ${AnimationSideBar} 0.5s 0.5s forwards;
`;

export const StyledWrapperArrow = styled.div`
  width: 9vh;
  height: 9vh;
  background: ${({ theme }) => theme.cream};
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ toLeft }) =>
    toLeft &&
    css`
      left: 0;
      right: unset;
    `}
`;

export const StyledIcon = styled(Icon)`
  transform: ${({ toLeft }) =>
    toLeft ? 'scale(0.05) rotate(180deg)' : 'scale(0.05)'};
  margin: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

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

  ${({ brown }) =>
    brown &&
    css`
      background: ${({ theme }) => theme.brown};
    `}
`;

export const StyledLoad = styled.div`
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
    animation-name: ${AnimationLoad};
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

export const Number = styled.div`
  width: ${({ last }) => (last ? '9vw' : '15vw')};
  font-size: 700px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  ${({ animation }) =>
    animation
      ? css`
          animation: ${AnimationNuber} 0.5s forwards;
        `
      : css`
          animation: ${AnimationNuber2} 0.5s forwards;
        `}
`;

export const StyledBigNumbrerP = styled.p`
  color: white;
  text-shadow: -4px 0 ${({ theme }) => theme.pink},
    0 4px ${({ theme }) => theme.pink}, 4px 0 ${({ theme }) => theme.pink},
    0 -4px ${({ theme }) => theme.pink};
`;

export const StyledLastBox = styled.div`
  width: 24vw;
  height: 100%;
  background: ${({ theme }) => theme.brown};
`;
