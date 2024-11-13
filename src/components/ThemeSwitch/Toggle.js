import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import MoonIcon from '../../images/moon.png';
import SunIcon from '../../images/sun.png';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  position: relative;
  width: 6rem; /* Increased width */
  height: 3rem; /* Increased height */

  img {
    height: 2rem; /* Increased height */
    width: 2rem; /* Increased width */
    transition: all 0.3s linear;
    
    &:first-child {
      transform: ${({ isLight }) => isLight ? 'translateX(0)' : 'translateX(100px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ isLight }) => isLight ? 'translateX(-100px)' : 'translateX(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} isLight={isLight}>
      <img src={SunIcon} alt="Sun Icon" />
      <img src={MoonIcon} alt="Moon Icon" />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;