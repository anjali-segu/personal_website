import * as React from 'react'
import {gray} from '../../utils/theme'
import Panel from '../../atom/Panel'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {Theme, makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      image: {
          width: theme.spacing(100),
          [theme.breakpoints.down('sm')]: {
            width: theme.spacing(80),
          },
        },
      facts: {
        fontFamily: 'Quicksand, open sans, sans-serif',
        paddingTop: theme.spacing(10),
      },
      factsSpacer: {
        paddingTop: theme.spacing(15),
        paddingRight: theme.spacing(10),
        [theme.breakpoints.down('sm')]: {
          paddingRight: theme.spacing(0),
          paddingBottom: theme.spacing(5),
          paddingTop: theme.spacing(3),
        },
      },
      imagecenter: {
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
        },
      },
      }
    }
)
interface Props {

}

const FunFacts = () => {
  const classes = useStyles()
  return (
    <Panel backgroundColor={gray}>
      <Grid container>
        <Grid item md={2} />

          <Grid item md={4} xs={12} className={classes.factsSpacer}>
            <Typography variant={'h4'}>
              {'Some fun facts about myself.'}
            </Typography>
            <Typography className={classes.facts} variant={'h6'}>
              {`I currently live in Austin and am a sophomore at Texas A&M.
                I am a huge foodie, love photography, paint, and do traditional indian dancing
                as well as act in my free time in downtown Austin. I have a Cavalier
                King Charles Spaniel named Dove and a South American parrot named Mr. Cutie.  `}
            </Typography>
          </Grid>

          <Grid className={classes.imagecenter} item md={4} xs={12}>
            <img className= {classes.image} src={process.env.PUBLIC_URL + '/Austin.jpeg'} />
          </Grid>

        <Grid item md={2} />
      </Grid>

    </Panel>
  )
}

export default FunFacts
