import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'

import Panel from '../../atom/Panel'

interface Props {

}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      title: {
        marginBottom: theme.spacing(5),
        textAlign: 'center',
      },
      subtitle: {
        fontFamily: 'Quicksand, open sans, sans-serif',
      }
    }
  }
)

const Bio = (props:Props) => {
  const classes = useStyles()

  return (
    <Panel>
      <Grid container>
        <Grid item md={2} />
        <Grid item md={8}>
          <Typography variant={'h3'} className={classes.title}>
            {'I\'m a front-end developer.'}
          </Typography>
          <Typography variant={'h5'} className={classes.subtitle}>
            {'My passions are utilizing web development to bring out the best in any company or organization. How you market yourself is powerful in this digital age.'}
          </Typography>
        </Grid>
        <Grid item md={2} />
      </Grid>
    </Panel>
  )
}

export default Bio
