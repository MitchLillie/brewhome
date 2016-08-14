import React from 'react'

const IBU = React.createClass({
  render: function () {

    return (
    <div className='calculated-ibu'>
      <h2>IBU = {this.props.ibu}</h2>
    </div>
    )
  }
})

export default IBU
