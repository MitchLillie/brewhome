require('../less/main.less')

'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var _ = require('lodash')
var $ = require('jquery')
// var nano = require('nano')('https://brewhome.cloudant.com/hops/_all_docs')
// var db = nano.use('hops')

var data = [{
  id: 1,
  name: 'galaxy',
  aa: 13.0,
  time: 60,
  type: 'pellet'
}]

const HopBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url + '/_all_docs?include_docs=true',
      dataType: 'json',
      cache: false,
      success: function (data) {
        let models = data.rows.map(function (e, i) {
          return e.doc
        })
        console.log('models: ', models)
        this.setState({data: models})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  handleHopSubmit: function (hop) {
    console.log('hop: ', hop)
    // send to server curl -H "Content-Type: application/json" -X POST -d '{"name": "galaxy", "aa": 13.0, "time": 60, "type": "pellet"}' https://brewhome.cloudant.com/hops
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data: hop,
      success: function (data) {
        this.setState({data: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  getInitialState: function () {
    return {data: []}
  },
  componentDidMount: function () {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },
  render: function () {
    return (
      <div className='hopBox'>
        IBU calculator
        <HopList data={this.state.data}/>
        <HopForm onHopSubmit={this.handleHopSubmit}/>
        <IBU />
      </div>
    )
  }
})

const HopList = React.createClass({
  render: function () {
    console.log('hoplist this.state: ', this.state)
    return (
    <div className='hops-list'>
      <ul>
        {this.props.data.map(hop => {
          return <Hop {...hop} key={hop._id} />
        })}
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
        <b>{this.props.name}</b><span> </span>
        <span>{this.props.aa}%</span><span> </span>
        <span>{this.props.time} min</span><span> </span>
        <span>{this.props.type}</span>
      </p>
    </div>
    )
  }
})

const HopForm = React.createClass({
  getInitialState: function () {
    return {name: '', aa: '', time: '60 min', type: 'pellet'}
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
  handleSubmit: function (e) {
    e.preventDefault()
    // let node = this.refs
    // let newHop = _.mapValues(node, function (e, i) {
    //   return e.value
    // })
    // let {hopsList} = state
    // hopsList.push(newHop)
    // node = _.mapValues(node, function (e, i) {
    //   e.value = ''
    //   return e
    // })
    this.props.onHopSubmit(this.state)
    this.setState({name: '', aa: ''})
  // this.props.addChannel(channelName)
  // node.value = ''
  // let {hops} = this.state
  // hops.push()``
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
        <select value={this.state.time} onChange={this.handleTimeChange}>
          <option value='60 min'>
            60 min
          </option>
          <option value='20 min'>
            20 min
          </option>
          <option value='10 min'>
            10 min
          </option>
          <option value='0 min'>
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

const IBU = React.createClass({
  render: function () {
    return (
    <div className='calculated-ibu'>
    </div>
    )
  }
})

ReactDOM.render(
  <HopBox url='https://brewhome.cloudant.com/hops' pollInterval={2000}/>,
  document.getElementById('content')
)

// curl -H "Content-Type: application/json" -X POST -d '{"name": "galaxy", "aa": 13.0, "time": 60, "type": "pellet"}' https://brewhome.cloudant.com/hops
// curl https://brewhome.cloudant.com/hops/74af3937271303b42023b40e19892b92
