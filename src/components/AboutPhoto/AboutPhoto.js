import React from 'react';
import styled from 'styled-components';

const StyledMainTemplate = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: red;
`;

const AboutPhoto = () => (
  <>
    <StyledMainTemplate />
  </>
);

export default AboutPhoto;
