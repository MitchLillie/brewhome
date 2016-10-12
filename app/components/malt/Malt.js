import React from 'react'

const Malt = React.createClass({
  render: function () {
    return (
    <li>
      <b>{this.props.name}</b><span> </span>
      <span>{this.props.lb} lb</span><span> </span>
      <span>{this.props.srm} srm</span><span> </span>
      <span>{this.props.potential} potential</span><span> </span>
      <span>{this.props.costLb} $/lb</span>
    </li>
    )
  },

  propTypes: {
    name: React.propTypes.string,
    lb: React.propTypes.number,
    srm: React.propTypes.number,
    potential: React.propTypes.number,
    costLb: React.propTypes.number
  }
})

export default Malt
