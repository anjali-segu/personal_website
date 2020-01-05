import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'

interface Props {
  description: string | any[],
  image: string,
  title: string,
  video?: string,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      body: {
        padding: theme.spacing(4),
        paddingTop: theme.spacing(1),
      },
      title: {
        fontFamily: 'Poly, serif',
        padding: theme.spacing(4),
        paddingBottom: theme.spacing(1),
      },
      imageDetail: {
        height: theme.spacing(64),
        width: theme.spacing(120),
        minWidth: '100%',
      },
    }
  }
)

const ProjectDetail = (props:Props) => {
  const {title, description, image, video} = props
  const classes = useStyles()

  return (
    <Card id={title}>
      {
        video ?
          <CardMedia
            className={classes.imageDetail}
            component={'video'}
            controls
            src={`${process.env.PUBLIC_URL}/${video}`}
            title={title}
          />
          :
          <CardMedia
            className={classes.imageDetail}
            image={`${process.env.PUBLIC_URL}/${image}`}
            title={title}
          />
      }
      <CardContent>
        <Typography variant={'h5'} className={classes.title}>
          {title}
        </Typography>
        <Typography variant={'body1'} className={classes.body}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProjectDetail
