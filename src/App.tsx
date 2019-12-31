import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'

import {theme} from './utils/theme'

import Navbar from './organism/Navbar'
import Home from './organism/Home'
import About from './organism/About'
import Footer from './organism/Footer'
import Portfolio from './organism/Portfolio'

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
            <Footer/>
          </Route>

          <Route path="/portfolio" exact>
            <Portfolio/>
            <Footer/>
          </Route>

          <Route path="/about" exact>
            <About/>
            <Footer/>
          </Route>

          <Route path="/resume" exact>
            <Home />
            <Footer/>
          </Route>

          <Route path="/contact" exact>
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
