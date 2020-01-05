import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {Theme, useTheme, makeStyles} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'


import NavbarLink from '../../atom/NavbarLink'
import MobileAppbar from '../../molecule/MobileAppbar'

interface Props {
  position?: 'fixed' | 'absolute' | 'sticky' | 'relative' | undefined,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      logo: {
        height: theme.spacing(10),
      }
    }
  }
)

const Navbar = (props:Props) => {
  const {position} = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()

  if (isMobile) {
    return (
      <MobileAppbar />
    )
  }

  return (
    <AppBar position={position}>
      <Toolbar>
        <NavbarLink
          content={
            <img
              className={classes.logo}
              src={`${process.env.PUBLIC_URL}/Logo.svg`}
            />
          }
          url={'/'}
        />
        <NavbarLink
          content={'home'}
          url={'/'}
        />
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

Navbar.defaultProps = {
  position: 'absolute',
}

export default Navbar
