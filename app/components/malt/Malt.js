import React from 'react'

const Malt = React.createClass({
  render: function () {
    return (
    <tr>
      <td className='col-md-6'>{this.props.name}</td>
      <td className='col-md-2'>{this.props.lb} lb</td>
      <td className='col-md-4'>{this.props.srm} srm</td>
    </tr>
    )
  },

  propTypes: {
    name: React.PropTypes.string,
    lb: React.PropTypes.number,
    srm: React.PropTypes.number,
    potential: React.PropTypes.number,
    costLb: React.PropTypes.number
  }
})

export default Malt
