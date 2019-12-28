import * as React from 'react'
import Panel from '../../atom/Panel'
import {charcoal} from '../../utils/theme'

import Navbar from '../Navbar'

interface Props {

}

const Footer = (props:Props) => {
  return (
    <Panel backgroundColor={charcoal}>
      <Navbar/>
    </Panel>
  )
}

export default Footer
