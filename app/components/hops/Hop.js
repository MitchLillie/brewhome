import React from 'react'

const Hop = React.createClass({
  render: function () {
    return (
      <li>
        <b>{this.props.name}</b><span> </span>
        <span>{this.props.aa}%</span><span> </span>
        <span>{this.props.oz} oz</span><span> </span>
        <span>{this.props.time} min</span><span> </span>
        <span>{this.props.type}</span>
      </li>
    )
  },
  propTypes: {
    name: React.PropTypes.string,
    aa: React.PropTypes.number,
    oz: React.PropTypes.number,
    time: React.PropTypes.number,
    type: React.PropTypes.string
  }
})

export default Hop
