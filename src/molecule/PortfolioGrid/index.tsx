import * as React from 'react'

import ProjectCard, {ProjectType} from '../../molecule/ProjectCard'
import {Theme, makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

import Panel from '../../atom/Panel'
import {gray} from '../../utils/theme'

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      cardSpacer: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
          paddingBottom: theme.spacing(4),
        },
      },
      spacer: {
        marginBottom: theme.spacing(6),
      },
    }
  }
)

const PortfolioGrid = () => {
  const classes = useStyles()
  return (
    <Panel backgroundColor={gray}>
      <Grid container>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
        image={'ProjectsMedia/ArtworkStamps.jpg'}
        title={'Blossoming Silhouette'}
        description={
          `Carved a stamp out of rubber block portraying the
          silhoutte of a girl blossoming inside.`}
        projectType={ProjectType.art}
        />
      </Grid>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
          image={'ProjectsMedia/CodingProjectCherryGiver.png'}
          video = {'ProjectsMedia/CodingProjectCherryGiver.mp4'}
          title= {'CherryGiver'}
          description={
            [
              `
              I pioneered a scalable web platform (`,
              <Link href={'https://www.cherrygiver.org'} target={'_blank'}>{'www.cherrygiver.org'}</Link>,
              `)
              that allows charities to launch targeted and transparent fundraising
              campaigns within minutes and connect with users.
              `
            ]}
          projectType={ProjectType.coding}
        />
      </Grid>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
          image={'ProjectsMedia/ArtworkPerspective.jpg'}
          title={'Hidden Escape'}
          description={
            `An acyrlic and watercolor piece
            describing the hard journey of finding our
            own hidden escape.`}
          projectType={ProjectType.art}
        />
      </Grid>

      <Grid item md={12} xs={12} className={classes.spacer} />

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
        image={'ProjectsMedia/LeadershipGirlsCode1.jpeg'}
        title={'GirlsCode'}
        description={
          `Designed an immersive 36-week curriculum for a class of 15 females
           in elementary school, exposing them to technology and computer
           science fundamentals.`}
        projectType={ProjectType.leadership}
        />
      </Grid>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
        image={'ProjectsMedia/ArtworkSunset.jpg'}
        title= {'Cry for Hope'}
        description={
          `A knee injury at the time made me realize how
          in the deepest darkness we find hope. This watercolor
          piece describes my hard journey and using hope to fuel it.`}
        projectType={ProjectType.art}
        />
      </Grid>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
          image={'ProjectsMedia/CodingProjectsGame.png'}
          video={'ProjectsMedia/CodingProjectGameVideo.mp4'}
          title={'Pollinator Game'}
          description={`Utilizing Java and Greenfoot I created a game
            that allows users to collect pollen and boosts to try to get
            the highest score.`}
          projectType={ProjectType.coding}
        />
      </Grid>

      <Grid item md={12} xs={12} className={classes.spacer} />

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
        image={'ProjectsMedia/ArtworkCorporate.jpg'}
        title= {'Struggle'}
        description={
          `An array of social and politcal struggles completed in graphite and ink.`}
        projectType={ProjectType.art}
        />
      </Grid>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
        image={'ProjectsMedia/locationfinderscreenshot.png'}
        title={'Location Finder Java App'}
        description={
          `Programmed a Java application that takes in coordinate as inputs
          and sorts through a spreadsheet to find locations within a specific
          radius of coordinates. Has like, save, and comment functionality.`}
        projectType={ProjectType.coding}
        />
      </Grid>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
          image={'ProjectsMedia/ArtworkPopart.jpg'}
          title={'So What if I\'m different'}
          description={`An Andy Warhol inspired piece toying with the concept
             of being different and not necessarily fitting in.`}
          projectType={ProjectType.art}
        />
      </Grid>

      <Grid item md={12} xs={12} className={classes.spacer} />

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
        image={'ProjectsMedia/ArtworkFaces.jpg'}
        title= {'Decomposed Characters'}
        description={
          `Each body part has so much character, emotion, and personality portrayed
          through decomposing each element of the face. This piece was completed
          in solely pencil.`}
        projectType={ProjectType.art}
        />
      </Grid>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
        image={'ProjectsMedia/LeadershipSWE.png'}
        title={'SWELites Stemfest Coordinator'}
        description={
          `Organized STEMfest, a day-long event where 120 Girl Scouts
          in elementary, middle school and high school learned various
          STEM topics through interactive activities offered by Texas A&M
          University`}
        projectType={ProjectType.leadership}
        />
      </Grid>

      <Grid item md={4} xs={12} className={classes.cardSpacer} >
        <ProjectCard
          image={'ProjectsMedia/ArtworkFlower.jpg'}
          title={'Stark Flower'}
          description={`A piece painted in india ink and water color
            playing with the concept of color and shadows.  `}
          projectType={ProjectType.art}
        />
      </Grid>

      <Grid item md={12} xs={12} className={classes.spacer} />

      </Grid>
    </Panel>
  )
}

export default PortfolioGrid
