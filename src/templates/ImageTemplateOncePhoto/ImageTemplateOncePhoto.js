import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Link } from 'gatsby';
import media from 'assets/styles/media';
import DescriptionPhoto from 'components/DescriptionPhoto/DescriptionPhoto';

const StyledMainWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #322b2b;

  ${media.desktop`
		display: none;
	`}
`;

const StyledPhoto = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StyledDesc = styled.div`
  width: 100%;
  height: auto;
`;

const StyledNameOfImage = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
  margin: 30px 15px 10px;
`;

const StyledContentOfImage = styled.p`
  font-weight: 300;
  font-size: 1.8rem;
  color: white;
  margin: 0px 15px;
`;

const StyledBackLink = styled(Link)`
  margin: 20px 15px;
  padding: 10px;
  width: 90px;
  color: white;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
`;

const StyledPhoneMainWrapper = styled.section`
  display: none;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brown};
  position: relative;

  ${media.desktop`
		display: flex;
	`}
`;

const StyledPhonePhoto = styled.img`
  max-height: 100vh;
`;

const StyledPhoneBackLink = styled(Link)`
  width: 60px;
  height: 60px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImageTemplateOncePhoto = ({ pageContext: { data } }) => {
  return (
    <MainTemplate>
      <>
        <StyledMainWrapper>
          <StyledPhoto src={data.photo.file.url} />
          <StyledDesc>
            <StyledBackLink to="/">powrót</StyledBackLink>
            <StyledNameOfImage>{data.title}</StyledNameOfImage>
            <StyledContentOfImage>
              {data.description.description}
            </StyledContentOfImage>
          </StyledDesc>
        </StyledMainWrapper>
        <StyledPhoneMainWrapper>
          <StyledPhonePhoto src={data.photo.file.url} />
          <StyledPhoneBackLink to="/" />
          <DescriptionPhoto
            secound
            animation
            title={data.title}
            description={data.description.description}
          />
        </StyledPhoneMainWrapper>
      </>
    </MainTemplate>
  );
};

export default ImageTemplateOncePhoto;
