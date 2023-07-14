import { useContext } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import { COLOUR_MODE } from '../constants';
import { ColourModeContext } from '../context/colourMode';

function ColourModeToggleButton() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === COLOUR_MODE.dark;
  const colourMode = useContext(ColourModeContext);

  return (
    <IconButton
      color={isDarkMode ? 'inherit' : 'primary'}
      onClick={colourMode.toggleColourMode}
      sx={{ alignSelf: 'center' }}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default ColourModeToggleButton;
