import React from 'react'

const Yeast = React.createClass({
  render: function () {
    return (
    <tr>
      <td className='col-md-8'>{this.props.name}</td>
      <td className='col-md-4'>Added: {this.props.time}</td>
    </tr>
    )
  },
  propTypes: {
    name: React.PropTypes.string,
    attenuation: React.PropTypes.number,
    flocculation: React.PropTypes.string,
    time: React.PropTypes.number,
    cost: React.PropTypes.number,
    temperature: React.PropTypes.object,
    productionDate: React.PropTypes.string
  }
})

export default Yeast
