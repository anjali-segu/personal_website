import * as React from 'react'

import HeaderPanel from '../../atom/HeaderPanel'
import SkillsTech from '../../atom/SkillsTech'
import PortfolioGrid from '../../molecule/PortfolioGrid'

interface Props {

}


const Portfolio = () => {
  return (
    <React.Fragment>
      <HeaderPanel
        image={'About.jpeg'}
        title={'My Work'}
      />
      <SkillsTech/>
      <PortfolioGrid/>
    </React.Fragment>
  )
}

export default Portfolio
