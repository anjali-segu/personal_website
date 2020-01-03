import React from 'react';

import HeaderPanel from '../../atom/HeaderPanel'
import Bio from '../../molecule/Bio'
import Summary from '../../molecule/Summary'
import Showcase from '../../molecule/Showcase'

const Home = () => {
  return (
    <React.Fragment>
      <HeaderPanel
        image={'home.jpeg'}
        title={'Anjali Segu'}
      />
      <Bio/>
      <Summary/>
      <Showcase/>
    </React.Fragment>
  )
}

export default Home
