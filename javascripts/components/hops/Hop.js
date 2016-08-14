import React from 'react'

const Hop = React.createClass({
  render: function () {
    return (
    <div>
      <p>
        <b>{this.props.name}</b><span> </span>
        <span>{this.props.aa}%</span><span> </span>
        <span>{this.props.oz} oz</span><span> </span>
        <span>{this.props.time} min</span><span> </span>
        <span>{this.props.type}</span>
      </p>
    </div>
    )
  }
})

export default Hop
