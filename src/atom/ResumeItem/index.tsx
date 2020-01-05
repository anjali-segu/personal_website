import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import {Theme, makeStyles} from '@material-ui/core/styles'
import {tan} from '../../utils/theme'

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
        spacer: {
            paddingBottom: theme.spacing(6)
          },
        subtitle:{
          color: tan,
          fontStyle: 'italic',
          fontWeight: 'bold',
        },
      }
    }
)

interface Props {
  description: string | any[],
  title: string,
  role?: string,
  time?: string,
}

const ResumeItem = (props:Props) => {
  const {description, title, role, time} = props
  const classes = useStyles()
  return (
    <React.Fragment>
        <Grid container>
          <Grid item md={2} />

          <Grid className={classes.spacer} item md={8}>
            <Typography variant={'h6'}>
              {title}
            </Typography>
            <Typography className={classes.subtitle} variant={'body1'}>
                {role}
            </Typography>
            <Typography className={classes.subtitle} variant={'body1'}>
                {time}
            </Typography>
            <Typography variant={'body1'}>
              {description}
            </Typography>
          </Grid>

          <Grid item md={2}/>

        </Grid>
    </React.Fragment>
  )
}

export default ResumeItem
