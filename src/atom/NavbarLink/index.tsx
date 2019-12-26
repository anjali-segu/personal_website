import * as React from 'react'
import Button from '@material-ui/core/Button'
import {Theme, makeStyles} from '@material-ui/core/styles'
import {white, beige} from '../../utils/theme'

interface Props {
  content: string,
  url: string,
}

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      link: {
        color: white,
        fontSize: theme.typography.h6.fontSize,
        '&:hover': {
          color: beige,
        },
      }
    }
  }
)

const defaultHandler = (event:any) => {
  event.preventDefault()
}

const NavbarLink = (props:Props) => {
  const {content, url} = props
  const classes = useStyles()
  return (
    <Button className={classes.link} href={url} onClick={defaultHandler}>
      {content}
    </Button>
  )
}

export default NavbarLink
