import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Toolbar from '@material-ui/core/Toolbar'
import {Theme, makeStyles} from '@material-ui/core/styles'
import Menu from '@material-ui/icons/Menu';

import SidebarLink from '../../atom/SidebarLink'

import {gray} from '../../utils/theme'

interface Props {}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      mobileAppBar: {
        backgroundColor: gray,
        alignItems: 'unset',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
      sidebar: {
        width: theme.spacing(48),
      },
    }
  }
)

const MobileAppbar = (props:Props) => {
  const classes = useStyles()
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <React.Fragment>
      <AppBar className={classes.mobileAppBar}>
        <Toolbar>
          <IconButton
            edge={'start'}
            color={'inherit'}
            aria-label={'open drawer'}
            onClick={() => { setShowSidebar(!showSidebar) }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={showSidebar}
        onClose={() => { setShowSidebar(false) }}
      >
        <List className={classes.sidebar}>
          <SidebarLink
            closeHandler={() => { setShowSidebar(false)}}
            content={'portfolio'}
            url={'/portfolio'}
          />

          <SidebarLink
            closeHandler={() => { setShowSidebar(false)}}
            content={'about'}
            url={'/about'}
          />

          <SidebarLink
            closeHandler={() => { setShowSidebar(false)}}
            content={'resume'}
            url={'/resume'}
          />

          <SidebarLink
            closeHandler={() => { setShowSidebar(false)}}
            content={'contact'}
            url={'/contact'}
          />
        </List>
      </Drawer>
    </React.Fragment>
  )
}

export default MobileAppbar
