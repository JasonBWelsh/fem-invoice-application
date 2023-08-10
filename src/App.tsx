import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './state/context/theme-context';
import { lightTheme, darkTheme } from './design-system/design-system';

import './App.css';

const App = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className='App'>
        <div>Hi there!</div>
      </div>
    </StyledThemeProvider>
  );
};

export default App;
