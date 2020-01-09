import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'

import Panel from '../../atom/Panel'
import {gray,black} from '../../utils/theme'
import IconBar from '../../atom/IconBar'

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      footerTitle: {
          color: black,
          textAlign: 'center',
          marginBottom: theme.spacing(12),
        },
      subTitle: {
          color: black,
          textAlign: 'center',
          marginBottom: theme.spacing(5),
          paddingTop: theme.spacing(8),
        },
      }
    }
)

interface Props {

}

const ReachOut = (props:Props) => {
  const classes = useStyles()
  return (
      <Panel backgroundColor={gray}>
        <Typography className={classes.footerTitle} variant={'h4'}>
          {'Feel free to reach out to me.'}
        </Typography>
        <IconBar color={black}/>
        <Typography className={classes.subTitle} variant={'h6'}>
          {'Let\'s get started on a project today.'}
        </Typography>
      </Panel>
  )
}

export default ReachOut
