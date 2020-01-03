import * as React from 'react'

import HeaderPanel from '../../atom/HeaderPanel'
import FunFacts from '../../molecule/FunFacts'
import PhotoGrid from '../../atom/PhotoGrid'


const About = () => {
  return (
      <React.Fragment>
        <HeaderPanel
          image={'laughing.jpeg'}
          title={'My Passions '}
        />
        <FunFacts/>
        <PhotoGrid/>
      </React.Fragment>
  )
}

export default About
