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
      <div className='hopBox panel panel-default'>
        <div className='panel-heading'>
          <h5>Hops <span className='glyphicon glyphicon-cog pull-right'></span></h5>
        </div>
        <div className='panel-body'>
          <HopList hops={this.props.ingredients.hops} handleHopSubmit={this.handleHopSubmit}/>
        </div>
      </div>
    )
  },

  propTypes: {
    addHops: React.PropTypes.func,
    ingredients: React.PropTypes.object,
    ibu: React.PropTypes.number
  }
})

export default HopSection
