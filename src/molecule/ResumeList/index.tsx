import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'

import Panel from '../../atom/Panel'
import ResumeItem from '../../atom/ResumeItem'
import {black} from '../../utils/theme'

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      title: {
          textAlign: 'center',
          fontFamily: 'Quicksand, open sans, sans-serif',
          color: black,
          paddingBottom: theme.spacing(6),
        },
      }
    }
)

interface Props {

}

const ResumeList = (props:Props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
        <Typography className={classes.title} variant={'h4'}>
          {'Education'}
        </Typography>
        <ResumeItem
        description={
          `Bachelor of Science
          in Computer Science, degree anticipated May 2023 GPA: 4.00`}
        title={'Texas A&M University, ​College Station, Texas'}
        />

        <ResumeItem
        description={
          `Graduated with a STEM Endorsement, May 2019 GPA: 3.89`}
        title={'Westwood High School, ​Austin, Texas'}
        />

        <Typography className={classes.title} variant={'h4'}>
          {'Experience'}
        </Typography>
        <ResumeItem
        description={
          `Pioneered a scalable web platform(www.cherrygiver.org) that allows charities
           to launch targeted and transparentfundraising campaigns within minutes
           and connect with users. Partnered with three local Austin charities to
           host their fundraising needs, and implemented new features based
           on their feedback. Bootstrapped the project by developing with the
           Django web server framework and hosted the application on Heroku.
           Engineered a responsive user interface using Material UI, Javascript,
           and HTML/CSS.`}
        title={'CherryGiver, ​Austin, Texas'}
        role={'Founder and Lead Developer'}
        time={'Aug 2017 – Present'}
        />
        <ResumeItem
        description={
          `Managed all phases of recruitment, including defining hiring needs
          and posting/interviewing for positions, leading to 2 new hires over 2 months.
          Communicated with insurance companies to appeal patient claim denials and
          collect reimbursements owed on their behalf. Spearheaded social media
          campaigns on Facebook and Yelp leading to a 40% increase in appointments.`}
        title={'Capital Endocrine & Diabetes, ​Cedar Park, Texas'}
        role={'Office Manager Assistant'}
        time={'July 2016 – Present'}
        />
        <Typography className={classes.title} variant={'h4'}>
          {'Activites'}
        </Typography>
        <ResumeItem
        description={
          `Organized STEMfest, a day-long event where 120 Girl Scouts in elementary,
          middle school and high school learned various STEM topics through
          interactive activities offered by Texas A&M University. Managed all
          aspects of event planning and corresponded with 200 university
          departments and organizations to ensure all activities were hosted successfully.`}
        title={'SWELites Texas A&M, ​College Station, Texas'}
        role={'STEMFest Event Coordinator'}
        time={'Aug 2019 - Present'}
        />
        <ResumeItem
        description={
          `Developed a Python web scraper that detects fake news articles through
          machine learning and natural language processing of published content.`}
        title={'Aggie Coding Club, ​College Station, Texas'}
        role={'Active Member'}
        time={'Aug 2019 - Present'}
        />
        <ResumeItem
        description={
          `Designed an immersive 36-week curriculum for a class of 15
          females in elementary school, exposing them to technology and
          computer science fundamentals. Acquired a $200 sponsorship with
          National Center of Women in Technology that financed a partnership
          with Laurel Mountain Elementary School`}
        title={'GirlsCode, ​Austin, Texas​'}
        role={'President and NCWIT Program Leader ​'}
        time={'Aug 2017 – May 2018'}
        />
    </React.Fragment>
  )
}

export default ResumeList
