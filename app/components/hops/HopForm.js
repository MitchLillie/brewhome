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
      <div>
        <input type='submit' value='+' onClick={this.onClick} className={this.state.hide ? '' : 'hidden'}/>
        <div className={this.state.hide ? 'hidden hop-form' : 'hop-form'}>
          <label htmlFor='name'>Add hop</label>
          <form onSubmit={this.handleSubmit} className='form-tight'>
            <div className='row'>
              <div className='col-sm-4'>
                <input
                  placeholder='Name'
                  type='text'
                  id='name'
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  className='form-control'
                />
              </div>
              <div className='col-sm-1'>
                <input
                  placeholder='AA%'
                  type='text'
                  value={this.state.aa}
                  onChange={this.handleAAChange}
                  className='form-control'
                />
              </div>
              <div className='col-sm-1'>
                <input
                  placeholder='oz'
                  type='text'
                  value={this.state.oz}
                  onChange={this.handleOzChange}
                  className='form-control'
                />
              </div>
              <div className='col-sm-2'>
                <select
                  value={this.state.time}
                  onChange={this.handleTimeChange}
                  className='form-control'
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
              </div>
              <div className='col-sm-2'>
                <select
                  value={this.state.type}
                  onChange={this.handleTypeChange}
                  className='form-control'
                >
                  <option value='pellet'>
                    pellet
                  </option>
                  <option value='leaf'>
                    leaf
                  </option>
                </select>
              </div>
              <div className='col-sm-1'>
                <input type='submit' value='Add' className='btn btn-default'/>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  },
  propTypes: {
    onHopSubmit: React.propTypes.func
  }
})

export default HopForm
