import React from 'react'

const MaltForm = React.createClass({
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
      <tr className='collapse' id='fermentable-form-input'>
        <td>
          <input
            placeholder='Name'
            type='text'
            className='form-control'
            form='fermentable-form'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </td>
        <td>
          <input
            placeholder='Pounds'
            type='text'
            className='form-control'
            form='fermentable-form'
            value={this.state.lb}
            onChange={this.handleLbChange}
          />
        </td>
        <td>
          <input
            placeholder='SRM'
            type='text'
            className='form-control'
            form='fermentable-form'
            value={this.state.srm}
            onChange={this.handleSRMChange}
          />
        </td>
      </tr>
    )
  },
//   <tr class="collapse" id="fermentable-form-input">
//   <td>
//     <input type="text" class="form-control" form="fermentable-form" />
//   </td>
//   <td>
//     <input type="text" class="form-control" form="fermentable-form" />
//   </td>
//   <td>
//     <input type="text" class="form-control" form="fermentable-form" />
//   </td>
// </tr>
// <tr>
//   <td colspan="5">
//     <button type="button" data-toggle="collapse" data-target="#fermentable-form-input" class="btn btn-default">+</button>
//   </td>
// </tr>


// <form onSubmit={this.handleSubmit}>
//   <input
//     placeholder='Name'
//     type='text'
//     value={this.state.name}
//     onChange={this.handleNameChange}
//   />
//   <input
//     placeholder='Pounds'
//     type='text'
//     value={this.state.lb}
//     onChange={this.handleLbChange}
//   />
//   <input
//     placeholder='SRM'
//     type='text'
//     value={this.state.srm}
//     onChange={this.handleSRMChange}
//   />
//   <input
//     placeholder='Potential'
//     type='text'
//     value={this.state.potential}
//     onChange={this.handlePotentialChange}
//   />
//   <input
//     placeholder='$/lb'
//     type='text'
//     value={this.state.costLb}
//     onChange={this.handleCostLbChange}
//   />
//   <input type='submit' value='Add' />
// </form>
  propTypes: {
    onMaltSubmit: React.PropTypes.func
  }
})

export default MaltForm
