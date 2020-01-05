import * as React from 'react'
import {Theme, makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import HeaderPanel from '../../atom/HeaderPanel'
import SkillsTech from '../../atom/SkillsTech'
import Panel from '../../atom/Panel'
import ResumeList from '../../molecule/ResumeList'
import {gray,tan,black} from '../../utils/theme'

interface Props {

}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      actionButton: {
        color: black,
        '&:hover': {
          borderColor: black,
          backgroundColor: black,
          color: tan,
        },
      },
      buttonspacing: {
        [theme.breakpoints.down('sm')]: {
          paddingBottom: theme.spacing(8),
        },
      },
      }
    }
)

const Resume = (props:Props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <HeaderPanel
        image={'writing.jpeg'}
        title={'My Experience'}
      />
      <SkillsTech/>
      <Panel backgroundColor={gray}>
        <Grid container className={classes.buttonspacing}>
          <Grid item md={10} xs={4}/>
          <Grid item md={2} xs={8}>
            <Button
              download
              className={classes.actionButton}
              variant={'contained'}
              color={'primary'}
              size={'large'}
              href={process.env.PUBLIC_URL + '/resume.pdf'}
              target= {"_blank"}
            >
              {'Download Resume'}
            </Button>
          </Grid>
        </Grid>
        <ResumeList/>
      </Panel>
    </React.Fragment>
  )
}

export default Resume
