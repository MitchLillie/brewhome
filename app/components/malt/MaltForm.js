import React from 'react'

const HopForm = React.createClass({
  getInitialState: function () {
    return {name: '', lb: '', srm: '', potential: '', costLb: ''}
  },
  handleNameChange: function (e) {
    this.setState({name: e.target.value})
  },
  handleLbChange: function (e) {
    this.setState({lb: e.target.value})
  },
  handleSRMChange: function (e) {
    this.setState({srm: e.target.value})
  },
  handlePotentialChange: function (e) {
    this.setState({potential: e.target.value})
  },
  handleCostLbChange: function (e) {
    this.setState({costLb: e.target.value})
  },
  handleSubmit: function (e) {
    e.preventDefault()
    this.props.onMaltSubmit(this.state)
    this.setState({name: '', lb: '', srm: '', potential: '', costLb: ''})
  },
  render: function () {
    return (
    <div className='malt-form'>
      <h3>Add malt</h3>
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Name'
          type='text'
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          placeholder='Pounds'
          type='text'
          value={this.state.lb}
          onChange={this.handleLbChange}
        />
        <input
          placeholder='SRM'
          type='text'
          value={this.state.srm}
          onChange={this.handleSRMChange}
        />
        <input
          placeholder='Potential'
          type='text'
          value={this.state.potential}
          onChange={this.handlePotentialChange}
        />
        <input
          placeholder='$/lb'
          type='text'
          value={this.state.costLb}
          onChange={this.handleCostLbChange}
        />
        <input type='submit' value="Add" />
      </form>
    </div>
    )
  }
})

export default HopForm
