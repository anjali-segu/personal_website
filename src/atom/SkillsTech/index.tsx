import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'

import Panel from '../../atom/Panel'
import Grid from '@material-ui/core/Grid'
import {white,charcoal} from '../../utils/theme'

interface Props {

}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      title: {
          color: white,
          textAlign: 'center',
        },
      image: {
          width: theme.spacing(30),
        },
      largerimage: {
          width: theme.spacing(24),
        },
      spacer: {
          marginBottom: theme.spacing(6),
        },
      center: {
        textAlign: 'center',
      },
      }
    }
)

const SkillsTech = () => {
  const classes = useStyles()
  return (
    <Panel backgroundColor={charcoal}>
      <Typography className={classes.title} variant={'h4'}>
        {'Skills and Technologies'}
      </Typography>
      <Grid container>
        <Grid item className={classes.spacer} md={12} xs={12}/>
        <Grid item md={2}/>

        <Grid className= {classes.center} item md={2}>
            <img className= {classes.image} src={process.env.PUBLIC_URL + '/LanguageIcons/CSSlogo.png'} />
        </Grid>

        <Grid className= {classes.center} item md={2}>
            <img className= {classes.image} src={process.env.PUBLIC_URL + '/LanguageIcons/HTMLlogo.png'} />
        </Grid>

        <Grid className= {classes.center} item md={2}>
            <img className= {classes.largerimage} src={process.env.PUBLIC_URL + '/LanguageIcons/JavaScriptlogo.png'} />
        </Grid>

        <Grid className= {classes.center} item md={2}>
            <img className= {classes.image} src={process.env.PUBLIC_URL + '/LanguageIcons/Reactlogo.png'} />
        </Grid>

        <Grid item md={2}/>

        <Grid item className={classes.spacer} md={12} xs={12}/>

        <Grid item md={2}/>

        <Grid className= {classes.center} item md={2}>
            <img className= {classes.image} src={process.env.PUBLIC_URL + '/LanguageIcons/githublogo.png'} />
        </Grid>

        <Grid className= {classes.center} item md={2}>
            <img className= {classes.largerimage} src={process.env.PUBLIC_URL + '/LanguageIcons/Javalogo.png'} />
        </Grid>

        <Grid className= {classes.center} item md={2}>
            <img className= {classes.largerimage} src={process.env.PUBLIC_URL + '/LanguageIcons/pythonlogo.png'} />
        </Grid>

        <Grid className= {classes.center} item md={2}>
            <img className= {classes.largerimage} src={process.env.PUBLIC_URL + '/LanguageIcons/TypeScriptlogo.png'} />
        </Grid>

        <Grid item md={2}/>

        <Grid item className={classes.spacer} md={12} xs={12}/>

      </Grid>
    </Panel>
  )
}

export default SkillsTech
