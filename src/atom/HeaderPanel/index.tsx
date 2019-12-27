import * as React from 'react'

import classnames from 'classnames'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'

import {white} from '../../utils/theme'

interface Props {
  image: string,
  title: string,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      backgroundImage: (props:Props) => {
        return {
          backgroundImage: `url("${process.env.PUBLIC_URL}/${props.image}")`,
          backgroundPosition: 'center',
          backgroundSize: 'auto',
        }
      },
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.45)',
        height: '100%',
        width: '100%',
      },
      root: {
        height: '100vh',
        minHeight: theme.spacing(60),
      },
      title: {
        color: white,
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(30),
      }
    }
  }
)


const HeaderPanel = (props:Props) => {
  const {title} = props
  const classes = useStyles(props)

  return (
    <Box className={classnames(classes.root, classes.backgroundImage)}>
      <Box className={classes.overlay}>
        <Typography
          className={classes.title}
          variant={'h1'}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  )
}

export default HeaderPanel
