import * as React from 'react'
import Box from '@material-ui/core/Box'
import {Theme, makeStyles} from '@material-ui/core/styles'
import {gray} from '../../utils/theme'

interface Props {
  children:any,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      panel: {
        paddingBottom: theme.spacing(7),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(10),
        backgroundColor: gray,
      }
    }
  }
)

const Panel = (props:Props) => {
  const {children} = props
  const classes = useStyles()
  return (
    <Box className={classes.panel}>
      {children}
    </Box>
  )
}

export default Panel
