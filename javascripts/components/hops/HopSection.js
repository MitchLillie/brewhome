import React from 'react'
import $ from 'jquery'

import HopList from './HopList'
import HopForm from './HopForm'
import IBU from './IBU'

const HopSection = React.createClass({
  loadFromServer: function() {
    // TODO: sort data by time desc
    $.ajax({
      url: this.props.url + '/_all_docs?include_docs=true',
      dataType: 'json',
      cache: false,
      success: function (data) {
        let models = data.rows.map(function (e, i) {
          return e.doc
        })
        this.setState({data: models})
        this.calculateIbu()
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  handleHopSubmit: function (hop) {
    console.log('hop: ', hop)
    // TODO: validate
    // send to server curl -H "Content-Type: application/json" -X POST -d '{"name": "galaxy", "aa": 13.0, "time": 60, "type": "pellet"}' https://brewhome.cloudant.com/hops
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(hop),
      success: function (data) {
        this.loadFromServer()
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  calculateIbu: function () {
    // TODO: Toggle for leaf/pellets
    let og = 1.050
    let gallons = 5
    let ibu = 0
    // via http://www.rooftopbrew.net/ibu.php
    this.state.data.forEach((e, i) => {
      ibu += (1.65 * Math.pow(0.000125, og - 1)) *
                ((1-Math.pow(Math.E, (-0.04 * e.time))) / 4.15) *
                ((e.aa/100 * e.oz * 7490) / gallons)
    })

    // let ibu = (1.65 * Math.pow(0.000125, og - 1)) *
    //           ((1-Math.pow(Math.e, (-0.04 * time))) / 4.15) *
    //           ((aa/100 * oz * 7490) / gallons)
    this.setState({ibu: Math.round(ibu)})
  },
  getInitialState: function () {
    return {data: [], ibu: 0}
  },
  componentDidMount: function () {
    this.loadFromServer()
    setInterval(this.loadFromServer, this.props.pollInterval)
  },
  render: function () {
    return (
      <div className='hopBox'>
        IBU calculator
        <HopList data={this.state.data}/>
        <HopForm onHopSubmit={this.handleHopSubmit}/>
        <IBU ibu={this.state.ibu}/>
      </div>
    )
  }
})

export default HopSection
