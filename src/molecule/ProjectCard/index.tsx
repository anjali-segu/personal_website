import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'

import ProjectDetail from '../../atom/ProjectDetail'

export enum ProjectType {
  coding = 'Coding Project',
  art = 'Artwork',
  leadership = 'Leadership',
  graphic = 'Graphic Design',
}

interface Props {
  description: string | any[],
  image: string,
  projectType: ProjectType,
  title: string,
  video?: string,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      background: (props:Props) => {
        return {
          backgroundImage: `url("${process.env.PUBLIC_URL}/${props.image}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'grayscale(0.75)',
          height: theme.spacing(75),
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
        paddingTop: theme.spacing(20),
      },
      overlay: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        transition: 'background-color,color 0.25s ease-in-out',
        cursor: 'pointer',
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
  const {description, title, projectType, image, video} = props
  const classes = useStyles(props)
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <Card
        className={classes.background}
        onClick={() => {setOpen(true)}}
      >
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

      <Dialog
        onClose={() => { setOpen(false) }}
        aria-labelledby={title}
        open={open}
      >
        <ProjectDetail
          image={image}
          video={video}
          title={title}
          description={description}
        />
      </Dialog>
    </React.Fragment>
  )
}

export default ProjectCard
