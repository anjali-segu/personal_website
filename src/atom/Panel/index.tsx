import * as React from 'react'
import Box from '@material-ui/core/Box'
import {Theme, makeStyles} from '@material-ui/core/styles'
import {gray} from '../../utils/theme'

interface Props {
  children: any,
  backgroundColor?: string,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      panel: (props:Props) => {
        return {
          paddingBottom: theme.spacing(7),
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
          paddingTop: theme.spacing(10),
          backgroundColor: props.backgroundColor,
        }
      }
    }
  }
)

const Panel = (props:Props) => {
  const {children} = props
  const classes = useStyles(props)
  return (
    <Box className={classes.panel}>
      {children}
    </Box>
  )
}

Panel.defaultProps = {
  backgroundColor: gray,
}

export default Panel
