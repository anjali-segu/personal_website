import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'

import {theme} from './utils/theme'

import Navbar from './organism/Navbar'

import HeaderPanel from './atom/HeaderPanel'

import Panel from './atom/Panel'

import Bio from './molecule/Bio'

import Typography from '@material-ui/core/Typography'


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <HeaderPanel
        image={'computercoffee.jpeg'}
        title={'Anjali Segu'}
      />
      <Bio/>
    </ThemeProvider>
  );
}

export default App;
