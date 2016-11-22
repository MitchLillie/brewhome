import React from 'react'

const HopForm = React.createClass({
  getInitialState: function () {
    return {name: '', aa: '', time: '60', type: 'pellet', hide: true}
  },
  onClick: function () {
    this.setState({hide: false})
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
    this.setState({name: '', aa: '', oz: '', hide: true})
  },
  render: function () {
    return (
      <tr className='collapse' id='hop-form-input'>
        <td>
          <input
            placeholder='Name'
            type='text'
            id='name'
            className='form-control'
            form='hop-form'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </td>
        <td>
          <input
            placeholder='AA%'
            type='text'
            form='hop-form'
            value={this.state.aa}
            onChange={this.handleAAChange}
            className='form-control'
          />
        </td>
        <td>
          <input
            placeholder='oz'
            type='text'
            form='hop-form'
            value={this.state.oz}
            onChange={this.handleOzChange}
            className='form-control'
          />
        </td>
        <td>
          <select
            value={this.state.time}
            onChange={this.handleTimeChange}
            className='form-control'
            form='hop-form'
          >
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
        </td>
        <td>
          <select
            value={this.state.type}
            onChange={this.handleTypeChange}
            className='form-control'
            form='hop-form'
          >
            <option value='pellet'>
              pellet
            </option>
            <option value='leaf'>
              leaf
            </option>
          </select>
        </td>
      </tr>
    )
  },
  propTypes: {
    onHopSubmit: React.PropTypes.func
  }
})

export default HopForm
