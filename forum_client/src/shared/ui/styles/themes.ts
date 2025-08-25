const lightTheme = {
  mode: 'light',
  containerBackground: '#ffffff',
  containerText: '#333333',
  headerButtonBackground: '#ffffff',
  pageTitleBackground: '#A5292A',
  cardRadius: '0.428rem',
  subTextColor: '#666666',
  borderColor: '#c8c8c8',
  cardBackground: '#ffffff',
  accentColor: 'gray',
  buttonBackground: '#ffffff',
  buttonTextColor: '#A5292A',
  primaryButtonBackground: '#4285F4',
  primaryButtonTextColor: '#ffffff',
  darkModeIconColor: 'gray',

  biContainerBackground: '#ffffff',
  biContainerText: '#333333',
  biButtonBgColor: '#ffffff',
  biButtonTextColor: '#A5292A',

  navTitleContainerBackground: '#ffffff',
  navTitleContainerText: '#333333',
  navButtonBgColor: '#ffffff',
  navButtonTextColor: '#A5292A',

  loginContainerBackground: '#ffffff',
  loginContainerText: '#333333',
  loginButtonBackground: '#4285F4',
  loginButtonTextColor: '#ffffff',

  writeContainerBackground: '#ffffff',
  writeContainerText: '#333333',
  writeButtonBgColor: '#E9E9E9',
  writeButtonTextColor: 'orange',

  categoryContainerBackground: '#ffffff',
  categoryContainerText: '#333333',

  writingFormHeader: 'lightblue',
  statCard: 'lightblue',
} as const;

const darkTheme = {
  mode: 'dark',
  containerBackground: '#1a1a1a',
  containerText: '#ffffff',
  headerButtonBackground: '#2d2d2d',
  pageTitleBackground: '#ffffff',
  cardRadius: '0.428rem',
  subTextColor: '#b3b3b3',
  borderColor: '#404040',
  cardBackground: '#2d2d2d',
  accentColor: '#ffffff',
  buttonBackground: '#1a1a1a',
  buttonTextColor: '#ffffff',
  darkModeIconColor: '#ffffff',

  primaryButtonBackground: 'lightgray',
  primaryButtonTextColor: '#ffffff',

  biContainerBackground: '#1a1a1a',
  biContainerText: '#ffffff',
  biButtonBgColor: '#1a1a1a',
  biButtonTextColor: '#ffffff',

  navTitleContainerBackground: '#1a1a1a',
  navTitleContainerText: '#ffffff',
  navButtonBgColor: '#1a1a1a',
  navButtonTextColor: '#ffffff',

  loginContainerBackground: '#1a1a1a',
  loginContainerText: '#ffffff',
  loginButtonBackground: '#1a1a1a',
  loginButtonTextColor: '#ffffff',

  writeContainerBackground: '#1a1a1a',
  writeButtonBgColor: 'orange',
  writeButtonTextColor: 'white',
  writeContainerText: 'black',

  categoryContainerBackground: '#1a1a1a',
  categoryContainerText: '#ffffff',

  writingFormHeader: '#b3b3b3',
  statCard: '#b3b3b3',
} as const;

const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type ThemeKey = keyof typeof themes;

export default themes;

