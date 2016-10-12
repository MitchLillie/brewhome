import React from 'react'

import HopList from './HopList'
import HopForm from './HopForm'
import IBU from './IBU'

const HopSection = React.createClass({
  handleHopSubmit: function (hop) {
    this.props.addHops(hop)
  },

  render: function () {
    return (
      <div className='hopBox'>
        IBU calculator
        <HopList hops={this.props.ingredients.hops}/>
        <HopForm onHopSubmit={this.handleHopSubmit}/>
        <IBU ibu={this.props.ibu}/>
      </div>
    )
  },

  propTypes: {
    addHops: React.propTypes.func,
    ingredients: React.propTypes.object,
    ibu: React.propTypes.ibu
  }
})

export default HopSection
