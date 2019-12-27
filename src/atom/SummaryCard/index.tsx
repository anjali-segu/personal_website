import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import {Theme, makeStyles} from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import {tan, white} from '../../utils/theme'

interface Props {
  title: string,
  body: string,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      title: {
        marginBottom: theme.spacing(5),
        textAlign: 'center' as 'center',
        color: tan,
      },
      body: {
        color: white,
        textAlign: 'center' as 'center',
      },
      card: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    }
  }
)

const SummaryCard = (props:Props) => {
  const classes = useStyles()
  const {title, body} = props
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant={'h6'} className={classes.title}>
          {title}
        </Typography>
        <Typography variant={'body1'} className={classes.body}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SummaryCard
