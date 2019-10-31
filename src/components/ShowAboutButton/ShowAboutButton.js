import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledButton = styled(Link)`
  width: 150px;
  height: 50px;
  background: white;
  color: black;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.7rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

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
    left: 14%;
    top: 54%;
    transform: translate(-50%);
  }

  ::after {
    height: 10px;
    width: 1px;
    position: absolute;
    left: 14%;
    top: calc(54% - 5px);
    transform: translate(-50%);
  }
`;

//TODO: wywalić ten kod bo jest nie potrrzebny, oraz ostylować tak aby było idealnie na środku, doadć prop types
const ShowAboutButton = ({ linkTo }) => {
  const [showAbout, setShowAbout] = useState(false);

  const changeShowAbout = () => {
    setShowAbout(true);
  };

  return (
    <>
      <StyledButton to={linkTo} onClick={changeShowAbout}>
        czytaj o tym
      </StyledButton>
      {/* {showAbout ? <AboutPhoto /> : null} */}
    </>
  );
};

export default ShowAboutButton;
