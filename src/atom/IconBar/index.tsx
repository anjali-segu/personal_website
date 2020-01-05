import * as React from 'react'
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import {Theme, makeStyles} from '@material-ui/core/styles'

import {white,beige} from '../../utils/theme'

interface Props {

}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      iconColor: {
          color: white,
          '&:hover': {
            color: beige,
          },
      },
      centerIcon: {
        textAlign: 'center',
      },
    }
  }
)


const IconBar = (props:Props) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={3}/>

      <Grid item xs={2} className={classes.centerIcon}>
        <IconButton
          className={classes.iconColor}
          href={'https://github.com/anjali-segu'}
          target={'_blank'}
        >
          <GitHubIcon/>
        </IconButton>
      </Grid>

      <Grid item xs={2} className={classes.centerIcon}>
        <IconButton
          className={classes.iconColor}
          href={'https://www.linkedin.com/in/anjali-segu-78a780198/'}
          target={'_blank'}
        >
          <LinkedInIcon/>
        </IconButton>
      </Grid>

      <Grid item xs={2} className={classes.centerIcon}>
        <IconButton
          className={classes.iconColor}
          href={'mailto:asegu01@gmail.com'}
        >
          <MailIcon/>
        </IconButton>
      </Grid>

      <Grid item xs={3}/>
    </Grid>
  )
}

export default IconBar
