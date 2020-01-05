import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'

import Panel from '../../atom/Panel'
import Navbar from '../Navbar'
import {white,charcoal} from '../../utils/theme'
import IconBar from '../../atom/IconBar'

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      footerTitle: {
          color: white,
          textAlign: 'center',
          marginBottom: theme.spacing(12),
        },
      }
    }
)

interface Props {

}

const Footer = (props:Props) => {
  const classes = useStyles()
  return (

    <Panel backgroundColor={charcoal}>
      <Typography className={classes.footerTitle} variant={'h4'}>
        {'Interested in doing a project together?'}
      </Typography>
      <Navbar position={'sticky'} />
      <IconBar/>
    </Panel>
  )
}

export default Footer
