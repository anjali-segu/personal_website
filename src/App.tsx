import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'

import {theme} from './utils/theme'

import Navbar from './organism/Navbar'

import HeaderPanel from './atom/HeaderPanel'


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <HeaderPanel
        image={'computercoffee.jpeg'}
        title={'Anjali Segu'}
      />
    </ThemeProvider>
  );
}

export default App;
