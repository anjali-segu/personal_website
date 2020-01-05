import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {Link as RouterLink} from 'react-router-dom'

import SummaryCard from '../../atom/SummaryCard'
import Panel from '../../atom/Panel'
import {charcoal,white} from '../../utils/theme'

interface Props {

}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      actions: {
        marginTop: theme.spacing(5),
        textAlign: 'center',
      },
      title: {
        marginBottom: theme.spacing(5),
        textAlign: 'center',
        color: white,
      },
      wrapper: {
        paddingLeft: theme.spacing(11),
        paddingRight: theme.spacing(11),
      }
    }
  }
)


const Summary = (props:Props) => {
  const classes = useStyles()
  return (
    <Panel backgroundColor={charcoal}>
      <Grid container className={classes.wrapper}>
        <Grid item md={1} />
        <Grid item md={10}>
          <Typography variant={'h4'} className={classes.title}>
            {`
              My background in art and computer science allows
              me to create custom sites.
            `}
          </Typography>
        </Grid>
        <Grid item md={1} />

        <Grid item md={4}>
          <SummaryCard
            title={'CODING PROJECTS'}
            body={'These are several projects I have created that utilized my programming knowledge.'}
          />
        </Grid>
        <Grid item md={4}>
          <SummaryCard
            title={'ARTWORK'}
            body={'View a few of my favorite pieces I have created. Art is the ultimate form of expression that gives me an edge.'}
          />
        </Grid>
        <Grid item md={4}>
          <SummaryCard
            title={'LEADERSHIP'}
            body={'I have taught, worked at companies, and am active in many engineering extracurriculars.'}
          />
        </Grid>
      </Grid>

      <Grid item md={12} className={classes.actions}>
        <Button
          variant={'contained'}
          color={'primary'}
          size={'large'}
          to={'/portfolio'}
          component={RouterLink}
        >
          {'Portfolio'}
        </Button>
      </Grid>

    </Panel>
  )
}

export default Summary
