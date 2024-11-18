import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import MoonIcon from '../../images/moon.png';
import SunIcon from '../../images/sun.png';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme === 'light' ? '#fff' : '#333'};
  border: 2px solid ${({ theme }) => theme === 'light' ? '#000' : '#fff'};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  position: relative;
  width: 6rem; /* Increased width */
  height: 3rem; /* Increased height */

  img {
    height: 2rem; /* Increased height */
    width: 2rem; /* Increased width */
    transition: all 0.3s linear;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} theme={theme}>
      {isLight ? <img src={SunIcon} alt="Sun Icon" /> : <img src={MoonIcon} alt="Moon Icon" />}
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;