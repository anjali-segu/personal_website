import React from 'react';

import HeaderPanel from '../../atom/HeaderPanel'
import Bio from '../../molecule/Bio'
import Summary from '../../molecule/Summary'

const Home = () => {
  return (
    <React.Fragment>
      <HeaderPanel
        image={'computercoffee.jpeg'}
        title={'Anjali Segu'}
      />
      <Bio/>
      <Summary/>
    </React.Fragment>
  )
}

export default Home
