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
          url={'#'}
        />
        <NavbarLink
          content={'about'}
          url={'#'}
        />
        <NavbarLink
          content={'resume'}
          url={'#'}
        />
        <NavbarLink
          content={'contact'}
          url={'#'}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
