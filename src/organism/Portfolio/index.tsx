import * as React from 'react'

import HeaderPanel from '../../atom/HeaderPanel'
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
      <PortfolioGrid/>
    </React.Fragment>
  )
}

export default Portfolio
