import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'

import {theme} from './utils/theme'

import Navbar from './organism/Navbar'
import Home from './organism/Home'
import About from './organism/About'
import Footer from './organism/Footer'
import Portfolio from './organism/Portfolio'
import Resume from './organism/Resume'

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
            <Portfolio/>
          </Route>

          <Route path="/about" exact>
            <About/>
          </Route>

          <Route path="/resume" exact>
            <Resume/>
          </Route>

          <Route path="/contact" exact>
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
