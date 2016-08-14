import React from 'react'

const HopForm = React.createClass({
  getInitialState: function () {
    return {name: '', aa: '', time: '60', type: 'pellet'}
  },
  handleNameChange: function (e) {
    this.setState({name: e.target.value})
  },
  handleAAChange: function (e) {
    this.setState({aa: e.target.value})
  },
  handleTimeChange: function (e) {
    this.setState({time: e.target.value})
  },
  handleTypeChange: function (e) {
    this.setState({type: e.target.value})
  },
  handleOzChange: function (e) {
    this.setState({oz: e.target.value})
  },
  handleSubmit: function (e) {
    e.preventDefault()
    this.props.onHopSubmit(this.state)
    this.setState({name: '', aa: '', oz: ''})
  },
  render: function () {
    return (
    <div className='hop-form'>
      <h3>Add hop</h3>
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Name'
          type='text'
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          placeholder='AA%'
          type='text'
          value={this.state.aa}
          onChange={this.handleAAChange}
        />
        <input
          placeholder='Amount (oz)'
          type='text'
          value={this.state.oz}
          onChange={this.handleOzChange}
        />
        <select value={this.state.time} onChange={this.handleTimeChange}>
          <option value='60'>
            60 min
          </option>
          <option value='20'>
            20 min
          </option>
          <option value='10'>
            10 min
          </option>
          <option value='0'>
            0 min
          </option>
        </select>
        <select value={this.state.type} onChange={this.handleTypeChange}>
          <option value='pellet'>
            pellet
          </option>
          <option value='leaf'>
            leaf
          </option>
        </select>
        <input type='submit' value="Add" />
      </form>
    </div>
    )
  }
})

export default HopForm
