import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

import {white} from '../../utils/theme'

export enum ProjectType {
  coding = 'Coding Project',
  art = 'Artwork',
  leadership = 'Leadership',
}

interface Props {
  image: string,
  projectType: ProjectType,
  title: string,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      background: (props:Props) => {
        return {
          backgroundImage: `url("${process.env.PUBLIC_URL}/${props.image}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: theme.spacing(35),
          textAlign: 'center',
        }
      },
      button: {
        color: 'inherit',
        border: 'inherit',
        boxShadow: 'none',
        marginTop: theme.spacing(3),
      },
      header: {
        color: 'inherit',
        fontFamily: 'Poly, serif',
      },
      subHeader: {
        color: 'inherit',
        paddingTop: theme.spacing(6),
      },
      overlay: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        transition: 'background-color,color 0.25s ease-in-out',
        color: 'transparent',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
        },
      },
      wrapper: {
        padding: 0,
        height: '100%',
        width: '100%',
      },
    }
  }
)

const ProjectCard = (props:Props) => {
  const {title, projectType} = props
  const classes = useStyles(props)

  return (
    <Card className={classes.background}>
      <CardContent className={classes.wrapper}>
        <Box className={classes.overlay}>
          <Typography variant={'subtitle2'} className={classes.subHeader}>
            {projectType}
          </Typography>
          <Typography variant={'h6'} className={classes.header}>
            {title}
          </Typography>
          <Button
            variant={'contained'}
            color={'secondary'}
            size={'large'}
            className={classes.button}
          >
            {'View Project'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
