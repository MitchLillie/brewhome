import React from 'react'

const Yeast = React.createClass({
  render: function () {
    return (
    <li>
      <b>{this.props.name}</b><span> </span>
      <span>{this.props.attenuation} % attenuation</span><span> </span>
      <span>{this.props.flocculation} flocculation</span><span> </span>
      <span>{this.props.time} time added</span><span> </span>
      <span>${this.props.cost}</span>
      <span>{this.props.temperature.low}° to {this.props.temperature.high}°</span><span> </span>
      <span>{this.props.productionDate} prod date</span><span> </span>
    </li>
    )
  },
  propTypes: {
    name: React.propTypes.string,
    attenuation: React.propTypes.number,
    flocculation: React.propTypes.string,
    time: React.propTypes.string,
    cost: React.propTypes.number,
    temperature: React.propTypes.object,
    productionDate: React.propTypes.number
  }
})

export default Yeast
