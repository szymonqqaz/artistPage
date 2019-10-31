import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ShowAboutButton from 'components/ShowAboutButton/ShowAboutButton';
import media from 'assets/styles/media';

const StyledMainWrapper = styled.div`
  display: none;
  margin-left: 6%;
  width: 94%;
  flex-wrap: wrap;

  ${media.desktop`
		display: flex;
	`}
`;

const StyledWienkszy = styled.div`
  width: 60%;
  background-color: ${({ color }) => color};
  height: auto;
`;

const StyledMniejszy = styled.div`
  width: 40%;
  background-color: ${({ color }) => color};
  margin: 0;
  height: auto;
`;

const StyledInnerImage = styled.div`
  width: 23vw;
  height: 23vw;
  z-index: 1000;
  position: relative;
  margin-left: 10%;
  margin-top: 10vh;
  background-image: url(${({ url }) => url});
  background-size: cover;
`;

const StyledInnerText = styled.div`
  margin-top: 10vh;
  margin-left: 10%;
  background-color: ${({ theme }) => theme.brown};
  width: 30vw;
  height: 23vw;
  position: relative;
  transform: translate(40%, -90%);
  z-index: 500;
`;

const StyledInnerText2 = styled(StyledInnerText)`
  margin: 5vh 0 0 15%;
  transform: unset;
  width: 25vw;
  height: 32vw;
`;

const StyledInnerImage2 = styled(StyledInnerImage)`
  margin: 5vh 0 0 10%;
  transform: translateY(-50%);
`;

const LinkToGo = styled(Link)`
  width: 50px;
  height: 50px;
  background: white;
  position: absolute;
  opacity: 0.8;
  bottom: 0;
  right: 0;

  ::before,
  ::after {
    content: '';
    position: absolute;
    background: black;
  }

  ::before {
    height: 1px;
    width: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
  }

  ::after {
    height: 10px;
    width: 1px;
    position: absolute;
    left: 50%;
    top: calc(50% - 5px);
    transform: translate(-50%);
  }
`;

const StyledNameOfPhoto = styled.p`
  color: white;
  width: 60%;
  margin: 0vh 0 0 40%;
  font-size: 2.5rem;
  padding-top: 7%;
  font-weight: 500;
`;

const StyledContext = styled.p`
  color: white;
  width: 55%;
  margin-left: 40%;
  overflow: hidden;
  padding-top: 5px;
  height: 50%;
  font-size: 2rem;
  font-weight: 300;
  opacity: 0.85;
`;

const StyledNameOfPhoto2 = styled(StyledNameOfPhoto)`
  width: 85%;
  margin: 0 10%;
`;

const StyledContext2 = styled(StyledContext)`
  width: 85%;
  margin: 0 10%;
  padding-top: 20px;
`;

const ImageTemplateDesktop = ({ edges }) => {
  return (
    <StyledMainWrapper>
      {edges.map((element, index) =>
        index % 3 ? (
          <>
            <StyledMniejszy>
              <StyledInnerText2>
                <StyledNameOfPhoto2>{element.node.title}</StyledNameOfPhoto2>
                <StyledContext2>
                  {element.node.description.description}
                </StyledContext2>
              </StyledInnerText2>
              <StyledInnerImage2 url={element.node.photo.file.url}>
                <LinkToGo to={element.node.photo.id} />
              </StyledInnerImage2>
            </StyledMniejszy>
          </>
        ) : (
          <>
            <StyledWienkszy>
              <StyledInnerImage url={element.node.photo.file.url}>
                <LinkToGo to={element.node.photo.id} />
              </StyledInnerImage>
              <StyledInnerText>
                <StyledNameOfPhoto>{element.node.title}</StyledNameOfPhoto>
                <StyledContext>
                  {element.node.description.description}
                </StyledContext>
              </StyledInnerText>
            </StyledWienkszy>
          </>
        )
      )}
    </StyledMainWrapper>
  );
};

export default ImageTemplateDesktop;
