import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {Link as RouterLink} from 'react-router-dom'

import Panel from '../../atom/Panel'
import {gray, black, tan} from '../../utils/theme'
import ProjectCard, {ProjectType} from '../../molecule/ProjectCard'

interface Props {

}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      actionWrapper: {
        textAlign: 'center',
      },
      actionButton: {
        color: black,
        '&:hover': {
          borderColor: black,
          backgroundColor: black,
          color: tan,
        },
      },
      cardSpacer: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
      title: {
        marginBottom: theme.spacing(5),
        textAlign: 'center',
        color: black,
      },
      subtitle: {
        fontFamily: 'Quicksand, open sans, sans-serif',
        textAlign: 'center' as 'center',
      },
      spacer: {
        marginBottom: theme.spacing(6),
      },
    }
  }
)


const Showcase = (props:Props) => {
  const classes = useStyles()
  return (
    <Panel backgroundColor={gray}>
      <Typography variant={'h4'} className={classes.title}>
        {'Showcased Projects'}
      </Typography>
      <Grid container>
        <Grid item md={1} />
        <Grid item md={10}>
          <Typography variant={'h6'} className={classes.subtitle}>
            {`
              I have accumulated a variety of experience working
              on many different experiences. I have worked with
              local Austin charities as well large organizations like
              NCWIT. Take a look at some of the projects I have worked on.
            `}
          </Typography>
        </Grid>
        <Grid item md={1} />

        <Grid item md={12} className={classes.spacer} />

        <Grid item md={4} className={classes.cardSpacer} >
          <ProjectCard
            image={'ProjectsMedia/ArtworkCorporate.jpg'}
            title={'Artwork Corporate'}
            description={'Artwork Corporate'}
            projectType={ProjectType.art}
          />
        </Grid>

        <Grid item md={4} className={classes.cardSpacer} >
          <ProjectCard
            image={'ProjectsMedia/CodingProjectsGame.png'}
            video={'ProjectsMedia/CodingProjectGameVideo.mp4'}
            title={'Pollinator Game'}
            description={'Utilizing Java and Greenfoot I created a game that allows users to collect pollen and boosts.'}
            projectType={ProjectType.art}
          />
        </Grid>

        <Grid item md={4} className={classes.cardSpacer} >
          <ProjectCard
            image={'ProjectsMedia/CodingProjectCherryGiver.png'}
            title={'CherryGiver'}
            description={
              `I pioneered a scalable web platform(www.cherrygiver.org)
              that allows charities to launch targeted and transparent fundraising
              campaigns within minutes and connect with users`}
            projectType={ProjectType.coding}
          />
        </Grid>

        <Grid item md={12} className={classes.spacer} />

        <Grid item md={12} className={classes.actionWrapper} >
          <Button
            className={classes.actionButton}
            variant={'contained'}
            color={'primary'}
            size={'large'}
            to={'/portfolio'}
            component={RouterLink}
          >
            {'More Projects'}
          </Button>
        </Grid>
      </Grid>
    </Panel>
  )
}

export default Showcase
