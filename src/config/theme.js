import { lighten, darken } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

const lightBlue = '#00E3D7';
const darkBlue = '#004860';
const darkerBlue = '#001F29';
const greyText = '#3A3D40';
const lightGrey = '#EEE';
const darkGrey = '#27292b';
const white = '#FFF';

const commonTheme = {
  palette: {
    common: {
      white,
    },
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: darkerBlue,
    },
  },
  typography: {
    h1: {
      fontFamily: '"IBM Flex Sans", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    button: {
      textTransform: 'none',
    },
  },
};

export const lightTheme = deepmerge(commonTheme, {
  palette: {
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: darkerBlue,
    },
    text: {
      primary: greyText,
      secondary: lighten(greyText, 0.3),
      disabled: lighten(greyText, 0.6),
    },
    background: {
      default: lightGrey,
      paper: white,
    },
  },
  typography: {
    h1: {
      color: darkBlue,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: white,
        }
      },
    },
  },
});

export const darkTheme = deepmerge(commonTheme, {
  palette: {
    primary: {
      main: lightBlue,
    },
    secondary: {
      main: darkBlue,
    },
    text: {
      primary: white,
      secondary: darken(white, 0.3),
      disabled: darken(white, 0.6),
    },
    background: {
      default: darken(darkGrey, 0.5),
      paper: darkGrey,
    },
  },
  typography: {
    h1: {
      color: lightBlue,
    },
  },
});
