import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import MaterialLink from '@material-ui/core/Link'
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
        [theme.breakpoints.down('sm')]: {
          paddingBottom: theme.spacing(4),
        },
      },
      title: {
        marginBottom: theme.spacing(5),
        textAlign: 'center',
        color: black,
      },
      subtitle: {
        fontFamily: 'Quicksand, open sans, sans-serif',
        textAlign: 'center' as 'center',
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

        <Grid item md={4} xs={12} className={classes.cardSpacer} >
          <ProjectCard
          image={'ProjectsMedia/stemfest.JPG'}
          title={'SWELites Stemfest Officer'}
          description={
            `Organized STEMfest, a day-long event where 120 Girl Scouts
            in elementary, middle school and high school learned various
            STEM topics through interactive activities offered by Texas A&M
            University.`}
          projectType={ProjectType.leadership}
          />
        </Grid>

        <Grid item md={4} xs={12} className={classes.cardSpacer} >
          <ProjectCard
            image={'ProjectsMedia/ArtInstallation.jpg'}
            title= {'Custom Art Installation'}
            description={
              [
                `
                Professionally  designed a custom art installation for Capital Endocrine
                & Diabetes, a local clinic. Created 35 pieces of custom art. Check out
                all my `,
                <MaterialLink href={'https://artinstallationced.wordpress.com/'} target={'_blank'}>{'pieces'}</MaterialLink>,
                `
                .`
              ]}
            projectType={ProjectType.art}
          />
        </Grid>

        <Grid item md={4} xs={12} className={classes.cardSpacer} >
          <ProjectCard
          image={'ProjectsMedia/nebulaintern.jpg'}
          title={'Nebuladata Internship'}
          description={
            `Expanded product portfolio by collecting web data on 5 leading streaming platforms
            using XPaths and Browser Extensions. Researched platforms for UI/UX testing and
            recommended options to leadership to improve the frontend.`}
          projectType={ProjectType.coding}
          />
        </Grid>

        <Grid item md={12} xs={12} className={classes.spacer} />

        <Grid item md={12} xs={12} className={classes.actionWrapper} >
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
