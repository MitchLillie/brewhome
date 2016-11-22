import React from 'react'

const YeastForm = React.createClass({
  getInitialState: function () {
    return {name: '', attenuation: '', time: '60', cost: '', productionDate: '', selectedDay: new Date(), initialMonth: new Date()}
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
  handleProductionDateChange: function (e, day) {
    this.setState({productionDate: e.target.value})
  },
  handleSubmit: function (e) {
    e.preventDefault()
    this.props.onYeastSubmit(this.state)
    this.setState({name: '', attenuation: '', temperature: ''})
  },
  render: function () {
    // <DayPicker
    //   selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
    //   onDayClick={ this.handleProductionDateChange }
    // />
    // <input
    //   placeholder='Production Date'
    //   type='date'
    //   value={this.state.productionDate}
    //   onChange={this.handleProductionDateChange}
    // />
    return (
      <tr className='collapse' id='yeast-form-input'>
        <td>
          <input
            placeholder='Name'
            type='text'
            className='form-control'
            form='yeast-form'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </td>
        <td>
          <input
            placeholder='Time added'
            type='text'
            className='form-control'
            form='yeast-form'
            value={this.state.time}
            onChange={this.handleTimeChange}
          />
        </td>
      </tr>
    )
  },
  propTypes: {
    onYeastSubmit: React.PropTypes.func
  }
})

export default YeastForm
