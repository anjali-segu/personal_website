import * as React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {useHistory} from 'react-router-dom'

interface Props {
  closeHandler: () => any,
  content: string,
  url: string,
}

const SidebarLink = (props:Props) => {
  const { closeHandler, content, url} = props
  const history = useHistory()

  return (
    <ListItem
      button
      onClick={() => {
        history.push(url)
        closeHandler()
      }}
    >
      <ListItemText
        primary={content.toUpperCase()}
      />
    </ListItem>
  )
}

export default SidebarLink
