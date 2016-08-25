import React from 'react'

import MaltList from './MaltList'
import OG from './OG'
import MaltForm from './MaltForm'

const MaltSection = React.createClass({
  handleMaltSubmit: function (malt) {
    this.props.addMalt(malt)
  },
  render: function () {
    return (
      <div className='maltBox'>
        Malt!
        <MaltList malts={this.props.ingredients.fermentables}/>
        <OG og={this.props.og}/>
        <MaltForm onMaltSubmit={this.handleMaltSubmit}/>
      </div>
    )
  }
})

export default MaltSection
