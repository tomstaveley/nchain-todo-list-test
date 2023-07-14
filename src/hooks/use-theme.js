import { useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import { lightTheme, darkTheme } from '../config/theme';
import { COLOUR_MODE } from '../constants';

const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? COLOUR_MODE.dark : COLOUR_MODE.light);

  const colourMode = useMemo(() => ({
    toggleColourMode: () => setMode((prevMode) =>
      prevMode === COLOUR_MODE.dark
        ? COLOUR_MODE.light
        : COLOUR_MODE.dark
    ),
  }), []);

  const isDarkMode = mode === COLOUR_MODE.dark ? COLOUR_MODE.dark : COLOUR_MODE.light;

  const theme = useMemo(() => createTheme(deepmerge(
    mode === COLOUR_MODE.dark ? darkTheme : lightTheme,
    {
      palette: {
        mode: mode,
      },
    },
  )), [mode]);
  
  return {
    colourMode,
    isDarkMode,
    mode,
    theme,
  };
};

export default useTheme;
