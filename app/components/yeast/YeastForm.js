import React from 'react'

const YeastForm = React.createClass({
  getInitialState: function () {
    return {name: '', attenuation: '', time: '60', cost: '', productionDate: ''}
  },
  handleNameChange: function (e) {
    this.setState({name: e.target.value})
  },
  handleAttenuationChange: function (e) {
    this.setState({attenuation: e.target.value})
  },
  handleTimeChange: function (e) {
    this.setState({time: e.target.value})
  },
  handleCostChange: function (e) {
    this.setState({cost: e.target.value})
  },
  handleTemperatureChange: function (e) {
    this.setState({temperature: e.target.value})
  },
  handleProductionDateChange: function (e) {
    this.setState({productionDate: e.target.value})
  },
  handleSubmit: function (e) {
    e.preventDefault()
    this.props.onYeastSubmit(this.state)
    this.setState({name: '', attenuation: '', temperature: ''})
  },
  render: function () {
    return (
    <div className='hop-form'>
      <h3>Add yeast</h3>
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Name'
          type='text'
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          placeholder='Attenuation %'
          type='text'
          value={this.state.attenuation}
          onChange={this.handleAttenuationChange}
        />
        <input
          placeholder='°F'
          type='text'
          value={this.state.temperature}
          onChange={this.handleTemperatureChange}
        />
        <input
          placeholder='Time added'
          type='text'
          value={this.state.time}
          onChange={this.handleTimeChange}
        />
        <input
          placeholder='$'
          type='text'
          value={this.state.cost}
          onChange={this.handleCostChange}
        />
        <input
          placeholder='Production Date'
          type='date'
          value={this.state.productionDate}
          onChange={this.handleProductionDateChange}
        />
        <input type='submit' value="Add" />
      </form>
    </div>
    )
  }
})

export default YeastForm
