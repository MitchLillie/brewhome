import React from 'react'
import $ from 'jquery'

// import MaltList from './MaltList'
// import MaltForm from './MaltForm'

const MaltSection = React.createClass({
  getInitialState: function () {
    return {data: [], ibu: 0}
  },
  render: function () {
    return (
      <div className='maltBox'>
        Malt
      </div>
    )
  }
})

export default MaltSection
