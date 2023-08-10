import React from 'react';

// TEST temp import of `styled` for test - remove this
import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { ThemeProvider, useTheme } from './state/context/theme-context';
import { lightTheme, darkTheme } from './design-system/design-system';

import './App.css';

// TEST component for test - remove
const TestBox = styled.div`
  border: 3px solid var(--primary-color);
  padding: 1rem 1.5rem;
  background: var(--background-color);
  color: var(--text-color);
`;
//

const App = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className='App'>
        <div>Hi there!</div>

        <TestBox>Here is some placeholder text to test the theme provider. Wow!!!</TestBox>
      </div>
    </StyledThemeProvider>
  );
};

export default App;
