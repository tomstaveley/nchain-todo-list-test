import { v4 as uuid } from 'uuid';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import Todos from './components/Todos';
import ColourModeProvider from './context/colourMode';
import useTheme from './hooks/use-theme';

const initialItems = [
  { id: uuid(), text: 'Task one', completed: false },
  { id: uuid(), text: 'Task two', completed: false },
  { id: uuid(), text: 'Task three', completed: false },
];

function App() {
  const { colourMode, theme } = useTheme();

  return (
    <ColourModeProvider colourMode={colourMode}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Todos items={initialItems} />
        </Layout>
      </ThemeProvider>
    </ColourModeProvider>
  );
}

export default App;
