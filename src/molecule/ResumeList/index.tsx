import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

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
          in Computer Science, degree anticipated Dec 2022 GPA: 4.00`}
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
          `Analyzed a large dataset provided from a not-profit using Tableau and Alteryx and
          recommended strategies to retain their donor base. Shadowed senior directors and
          associates to learn front end development, consulting, design, and UI/UX concepts.`}
        title={'PricewaterhouseCoopers, New York, New York'}
        role={'Start Intern'}
        time={'June 2021 – July 2021'}
        />
        <ResumeItem
        description={
          `Expanded product portfolio by collecting web data on 6 leading streaming platforms using XPaths and Browser
          Extensions. Launched an SEO optimization initiative to acquire users with revamped branding, social media,
          and content marketing leading to ~2,000 weekly impressions and a 10% increase in users. Researched
          platforms for UI/UX testing and recommended options to leadership to improve the frontend.`}
        title={'Nebuladata, ​New York, New York'}
        role={'Software Engineer and Marketing Intern'}
        time={'May 2020 – Present'}
        />
        <ResumeItem
        description={
          `Developed activity recognition algorithms that can identify and understand a person’s behavior and actions.
          Engineered wearable technologies and sensors that enhance a person’s senses and help people be more
          cognizant of their environment.`}
        title={'Sketch Recognition Lab, ​College Station, Texas'}
        role={'Researcher'}
        time={'Jan 2020 - May 2020'}
        />
        <ResumeItem
        description={
          [`Pioneered a scalable web platform (`,
            <Link href={'https://www.cherrygiver.org'} target={'_blank'}>www.cherrygiver.org</Link>,
            `) that allows charities
            to launch targeted and transparent fundraising campaigns within minutes
            and connect with users. Partnered with three local Austin charities to
            host their fundraising needs, and implemented new features based
            on their feedback. Bootstrapped the project by developing with the
            Django web server framework and hosted the application on Heroku.
            Engineered a responsive user interface using Material UI, Javascript,
            and HTML/CSS.
          `]}
        title={'CherryGiver, ​Austin, Texas'}
        role={'Founder and Lead Developer'}
        time={'Aug 2017 – May 2020'}
        />
        <ResumeItem
        description={
          `Managed all phases of recruitment, including defining hiring needs
          and posting/interviewing for positions, leading to 2 new hires over 2 months.
          Communicated with insurance companies to appeal patient claim denials and
          collect reimbursements owed on their behalf. Spearheaded social media
          campaigns on Facebook and Yelp leading to a 40% increase in appointments.`}
        title={'Capital Endocrine & Diabetes, ​Cedar Park, Texas'}
        role={'Operations Intern'}
        time={'July 2016 – Present'}
        />
        <Typography className={classes.title} variant={'h4'}>
          {'Leadership'}
        </Typography>
        <ResumeItem
        description={
          `Elected to serve as Vice President for the Texas A&M SWE chapter containing 500 members.
          Oversaw 5 officers to coordinate events containing 10-200+ attendees, and relayed status
          updates to the executive team.`}
        title={'SWE Texas A&M, ​College Station, Texas'}
        role={'External Vice President'}
        time={'May 2021 - Present'}
        />
        <ResumeItem
        description={
          `Organized STEMfest, an educational event where 120 Girl Scouts in elementary,
          middle school and high school learned various STEM topics through
          interactive activities offered by Texas A&M University. Managed all
          aspects of event planning and corresponded with 200 university
          departments and organizations to ensure all activities were hosted successfully.`}
        title={'SWELites Texas A&M, ​College Station, Texas'}
        role={'STEMFest Officer'}
        time={'Aug 2019 - May 2021'}
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
