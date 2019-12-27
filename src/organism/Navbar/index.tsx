import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import NavbarLink from '../../atom/NavbarLink'

interface Props {

}

const Navbar = (props:Props) => {
  return (
    <AppBar position={'absolute'}>
      <Toolbar>
        <NavbarLink
          content={'portfolio'}
          url={'/portfolio'}
        />
        <NavbarLink
          content={'about'}
          url={'/about'}
        />
        <NavbarLink
          content={'resume'}
          url={'/resume'}
        />
        <NavbarLink
          content={'contact'}
          url={'/contact'}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
