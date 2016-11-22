import React from 'react'

const Hop = React.createClass({
  render: function () {
    return (
      <tr>
        <td className='col-md-4'>{this.props.name}</td>
        <td className='col-md-2'>{this.props.aa}%</td>
        <td className='col-md-2'>{this.props.oz} oz</td>
        <td className='col-md-2'>{this.props.time} min</td>
        <td className='col-md-2'>{this.props.type}</td>
      </tr>
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
