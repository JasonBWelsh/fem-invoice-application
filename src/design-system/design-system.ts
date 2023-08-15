import { createTheme } from '@mui/material/styles';

export const COLORS = {
  mediumPurple: '#7C5DFA',
  lightPurple: '#9277FF',
  darkThree: '#1E2139',
  darkCharcoal: '#252945',

  lightPurpleGrey: '#DFE3FA',
  mediumGrey: '#888EB0',
  mediumBluePurple: '#7E88C3',
  darkOne: '#0C0E16',

  reddish: '#EC5757',
  peach: '#9277FF',
  lightBg: '#F8F8FB',
  darkTwo: '#141625',
};

export const TYPOGRAPHY = {};

// Styled Components Theme definitions
export const styledLightTheme = {
  primaryColor: COLORS.mediumPurple,
  secondaryColor: COLORS.lightPurple,
  backgroundColor: COLORS.lightBg,
  textColor: COLORS.darkCharcoal,
};

export const styledDarkTheme = {
  primaryColor: COLORS.mediumBluePurple,
  secondaryColor: COLORS.mediumGrey,
  backgroundColor: COLORS.darkThree,
  textColor: COLORS.lightPurpleGrey,
};

// generate MUI theme from StyledThemes
export const generateMuiTheme = (styledTheme: typeof styledLightTheme) => {
  return createTheme({
    palette: {
      primary: {
        main: styledTheme.primaryColor,
      },
      secondary: {
        main: styledTheme.secondaryColor,
      },
      background: {
        default: styledTheme.backgroundColor,
      },
      text: {
        primary: styledTheme.textColor,
      },
    },
  });
}

export const lightTheme = generateMuiTheme(styledLightTheme);
export const darkTheme = generateMuiTheme(styledDarkTheme);
