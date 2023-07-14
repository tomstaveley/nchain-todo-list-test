import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/ibm-plex-sans/500.css';
import logo from '/img/logo.svg'
import logoWhite from '/img/logo-white.svg'
import PropTypes from 'prop-types';
import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { COLOUR_MODE } from '../constants';
import ColourModeToggleButton from './ColourModeToggleButton';

function Layout({ children }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === COLOUR_MODE.dark;

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Container maxWidth="md">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <img src={isDarkMode ? logoWhite : logo} alt="nChain" />
            <ColourModeToggleButton />
          </Toolbar>
        </Container>
      </AppBar>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            my: 2,
          }}
        >
          <Typography
            align="center"
            sx={{ my: 2 }}
            variant="h1"
          >
            Todo List
          </Typography>
          {children}
        </Box>
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
