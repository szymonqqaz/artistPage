import React from 'react';
import styled from 'styled-components';
import ShowAboutButton from 'components/ShowAboutButton/ShowAboutButton';
import media from 'assets/styles/media';

const StyledMainWrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  ${media.desktop`
    display: none;
  `}
`;

const StyledPhoto = styled.div`
  position: relative;
  background-image: url(${({ url }) => url});
  width: 100%;
  height: 100vh;
  background-size: cover;

  ${media.desktop`
    display: none;
  `}
`;

const ImageTemplateContent = ({ edges }) => {
  return (
    <StyledMainWrapper>
      {edges.map(element => (
        <StyledPhoto
          url={element.node.photo.file.url}
          key={element.node.photo.id}
        >
          <ShowAboutButton linkTo={element.node.photo.id} />
        </StyledPhoto>
      ))}
      <></>
    </StyledMainWrapper>
  );
};

export default ImageTemplateContent;
