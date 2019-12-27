import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'

import {theme} from './utils/theme'

import Navbar from './organism/Navbar'
import Home from './organism/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/portfolio" exact>
            <Home />
          </Route>

          <Route path="/about" exact>
            <Home />
          </Route>

          <Route path="/resume" exact>
            <Home />
          </Route>

          <Route path="/contact" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
