import React from 'react';

// TEST temp import of `styled` for test - remove this
import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { useTheme } from './state/context/theme-context';
import { lightTheme, darkTheme } from './design-system/design-system';
import { Button } from './components/button'

// test
import Typography from '@mui/material/Typography';

import './App.css';

// TEST component for test - remove
const TestBox = styled.div`
  border: 3px solid ${({ theme }) => theme.primaryColor};
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`;
//

const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className='App'>
        <div>Hi there!</div>

        {/* <Button onClick={toggleTheme}>Toggle Me</Button> */}
        <Typography>Typography component</Typography>

        <TestBox>Here is some placeholder text to test the theme provider. Wow!!!</TestBox>
      </div>
    </StyledThemeProvider>
  );
};

export default App;
