import React from 'react'

const OG = React.createClass({
  render: function () {

    return (
    <div className='calculated-og'>
      <h2>OG = {this.props.og}</h2>
    </div>
    )
  }
})

export default OG
