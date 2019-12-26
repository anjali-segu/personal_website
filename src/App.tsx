import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'

import {theme} from './utils/theme'

import HeaderPanel from './atom/HeaderPanel'


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderPanel
        image={'computercoffee.jpeg'}
        title={'Anjali Segu'}
      />
    </ThemeProvider>
  );
}

export default App;
