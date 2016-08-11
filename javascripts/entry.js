require('../less/main.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash')

var state = {
  hopsList: [{
    id: 1,
    name: 'galaxy',
    aa: 13.0,
    time: 60,
    type: 'pellet'
  }],
  connected: false
}

var App = React.createClass({

  render: function(){
    console.log("this.state: ", this.state)

    return (
      <div className="myDiv">
        IBU calculator
        <HopsList
          {...state}
        />
      <HopForm />
        <IBU />
      </div>
    )
  }
});

const HopsList = React.createClass({
  render: function () {
    console.log("this.props: ", this.props)
    return (
      <div className="hops-list">
        <ul>
          {
            this.props.hopsList.map(hop => {
              return <Hop
                {...hop}
                key = {hop.id}
              />
            })
          }
        </ul>
      </div>
    )
  }
})

const Hop = React.createClass({
  render: function () {
    return (
      <div>
        <p>
          <b>{this.props.name} </b>
          <span>{this.props.aa}% </span>
          <span>{this.props.time} min </span>
          <span>{this.props.type}</span>
        </p>
      </div>
    )
  }
})

const HopForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault()
    console.log(this.refs.name.value)
    const node = this.refs
    let newHop = _.mapValues(node, function (e, i) {
      return e.value
    })
    console.log("newHop: ", newHop)
    let {hops} = this.state
    hops.push(newHop)
    node = _.mapValues(node, function (e, i) {
      e.value = ''
      return e
    })
    // this.props.addChannel(channelName)
    // node.value = ''
    // let {hops} = this.state
    // hops.push()``
  },
  render: function () {
    return (
      <div className="hop-form">
        <h3>Add hop</h3>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder='Name'
            type='text'
            ref='name'
          / >
          <input
            placeholder='AA%'
            type='text'
            ref='aa'
          / >
          <select ref='time'>
            <option>
              60 min
            </option>
            <option>
              20 min
            </option>
            <option>
              10 min
            </option>
            <option>
              0 min
            </option>
          </select>
          <select ref='type'>
            <option>
              pellet
            </option>
            <option>
              leaf
            </option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
})

const IBU = React.createClass({
  render: function () {
    return (
      <div className="calculated-ibu">

      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('content'));
