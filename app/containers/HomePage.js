import React, { Component } from 'react'

import HopSection from '../components/hops/HopSection'
import MaltSection from '../components/malt/MaltSection'

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <HopSection url='https://brewhome.cloudant.com/recipes' pollInterval={2000} />
        <MaltSection />
      </div>
    )
  }
}

// curl -H "Content-Type: application/json" -X POST -d '{"name": "galaxy", "aa": 13.0, "time": 60, "type": "pellet"}' https://brewhome.cloudant.com/hops
// curl https://brewhome.cloudant.com/hops/74af3937271303b42023b40e19892b92
