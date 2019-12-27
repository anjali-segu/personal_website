import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Panel from '../../atom/Panel'
import {gray, black} from '../../utils/theme'
import ProjectCard, {ProjectType} from '../../atom/ProjectCard'

interface Props {

}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
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
            projectType={ProjectType.art}
          />
        </Grid>

        <Grid item md={4} className={classes.cardSpacer} >
          <ProjectCard
            image={'ProjectsMedia/ArtworkCorporate.jpg'}
            title={'Artwork Corporate'}
            projectType={ProjectType.art}
          />
        </Grid>

        <Grid item md={4} className={classes.cardSpacer} >
          <ProjectCard
            image={'ProjectsMedia/ArtworkCorporate.jpg'}
            title={'Artwork Corporate'}
            projectType={ProjectType.art}
          />
        </Grid>
      </Grid>
    </Panel>
  )
}

export default Showcase
