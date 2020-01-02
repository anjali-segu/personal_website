import * as React from 'react'

import HeaderPanel from '../../atom/HeaderPanel'
import Panel from '../../atom/Panel'
import ResumeList from '../../molecule/ResumeList'
import {black,gray} from '../../utils/theme'

interface Props {

}

const Resume = (props:Props) => {
  return (
    <React.Fragment>
      <HeaderPanel
        image={'About.jpeg'}
        title={'My Experience'}
      />
      <Panel backgroundColor={gray}>
        <ResumeList/>
      </Panel>
    </React.Fragment>
  )
}

export default Resume
