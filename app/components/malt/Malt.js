import React from 'react'

const Malt = React.createClass({
  render: function () {
    return (
    <div>
      <p>
        <b>{this.props.name}</b><span> </span>
        <span>{this.props.lb} lb</span><span> </span>
        <span>{this.props.srm} srm</span><span> </span>
        <span>{this.props.potential} potential</span><span> </span>
        <span>{this.props.costLb} $/lb</span>
      </p>
    </div>
    )
  }
})

export default Malt
