// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import ColumnBox from './components/ColumnBox/ColumnBox';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/ThemeSwitch/theme';
import { GlobalStyles } from './components/ThemeSwitch/global';
import './App.css';
import { useDarkMode } from './useDarkMode';
import Toggle from './components/ThemeSwitch/Toggle';

function App() {
    
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <div className="App">
                    {/* Pass theme and toggleTheme as props */}
                    <Header theme={theme} toggleTheme={toggleTheme} />
                    
                    <ColumnBox>
                        <h1>I think this text box is pretty ugly.</h1>
                        <p>Here's where you could add more info!</p>
                    </ColumnBox>
                    <ColumnBox>
                    <footer>
                    Credits:
                    <br>
                    </br>
                    <small>Sun icon made by smalllikeart from www.flaticon.com</small>
                    <br>
                    </br>
                    <small>Moon icon made by Freepik from www.flaticon.com</small>
                    </footer>
                    </ColumnBox>
                </div>
                
            </>
        </ThemeProvider>
    );
}

export default App;
