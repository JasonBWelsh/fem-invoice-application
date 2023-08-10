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

// TODO: flesh out actual color vars that are required
export const lightTheme = {
  '--primary-color': COLORS.mediumPurple,
  '--secondary-color': COLORS.lightPurple,
  '--background-color': COLORS.lightBg,
  '--text-color': COLORS.darkCharcoal,
};

export const darkTheme = {
  '--primary-color': COLORS.mediumBluePurple,
  '--secondary-color': COLORS.mediumGrey,
  '--background-color': COLORS.darkThree,
  '--text-color': COLORS.lightPurpleGrey,
};
