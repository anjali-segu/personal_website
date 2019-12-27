import React from 'react';

import HeaderPanel from '../../atom/HeaderPanel'
import Bio from '../../molecule/Bio'

const Home = () => {
  return (
    <React.Fragment>
      <HeaderPanel
        image={'computercoffee.jpeg'}
        title={'Anjali Segu'}
      />
      <Bio/>
    </React.Fragment>
  )
}

export default Home
