import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {Theme, makeStyles} from '@material-ui/core/styles'

import Panel from '../../atom/Panel'
import HeaderPanel from '../../atom/HeaderPanel'
import PortfolioGrid from '../../molecule/PortfolioGrid'
import {white, charcoal} from '../../utils/theme'

interface Props {

}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      title: {
          color: white,
          textAlign: 'center',
        },
      subtitle: {
          color: white,
          fontFamily: 'Quicksand, open sans, sans-serif',
          paddingTop: theme.spacing(9),
          paddingBottom: theme.spacing(9),
        },
      }
    }
)


const Portfolio = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <HeaderPanel
        image={'coding.jpeg'}
        title={'My Work'}
      />
      <Panel backgroundColor={charcoal}>
        <Typography className={classes.title} variant={'h4'}>
          {'Coding and Art mean the world to me.'}
        </Typography>
        <Grid container>
          <Grid item md={2}/>
          <Grid item md={8}>
          <Typography className={classes.subtitle} variant={'h6'}>
            {`Art runs deep in my family and is a part of my heritage.
              And soon I realized how similar coding is to art. It's
              methodical, expressive, and creative. These passions of mine
              have led me to create many different projects. Check out
              some of my favorite projects below.`}
          </Typography>
          </Grid>
          <Grid item md={2}/>
        </Grid>
      </Panel>
      <PortfolioGrid/>
    </React.Fragment>
  )
}

export default Portfolio
