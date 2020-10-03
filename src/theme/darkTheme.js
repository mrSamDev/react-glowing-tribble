import { createMuiTheme } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  shadows,
  typography
});

export default darkTheme;
