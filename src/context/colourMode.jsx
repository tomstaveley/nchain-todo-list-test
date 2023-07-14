import PropTypes from 'prop-types';
import { createContext } from 'react';

export const ColourModeContext = createContext({ toggleColourMode: () => {} });

const ColourModeProvider = ({ children, colourMode }) => {

  return (
    <ColourModeContext.Provider value={colourMode}>
      {children}
    </ColourModeContext.Provider>
  );
};

ColourModeProvider.propTypes = {
  children: PropTypes.node,
  colourMode: PropTypes.func,
};

export default ColourModeProvider;
