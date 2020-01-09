import * as React from 'react'
import {Theme, makeStyles} from '@material-ui/core/styles'

import HeaderPanel from '../../atom/HeaderPanel'
import {white,gray} from '../../utils/theme'
import IconBar from '../../atom/IconBar'
import ReachOut from '../../atom/ReachOut'

const useStyles = makeStyles(
  (theme:Theme) => {
    return {
      footerTitle: {
          color: white,
          textAlign: 'center',
          marginBottom: theme.spacing(12),
        },
      }
    }
)

interface Props {

}

const Contact = (props:Props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <HeaderPanel
        image={'contact.jpeg'}
        title={'Connect with me'}
      />
      <ReachOut/>
    </React.Fragment>
  )
}

export default Contact
