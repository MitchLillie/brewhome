import React, { Component } from 'react'
import * as $ from 'jquery'

import HopSection from '../components/hops/HopSection'
import MaltSection from '../components/malt/MaltSection'

const url = 'https://brewhome.cloudant.com/recipes'
const pollInterval= 2000

const user = '1'
const gallons = 5

export default class HomePage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      // "_id": "xxx",
      // "user": "xxx",
      // "name": "American Wheat",
      // "style": "1D",
      // "gallons": 5.5,
      "brewHistory": [
        // {
        //   "id": "xxx",
        //   "date": "2016-06-06T18:25:43.511Z",
        //   "notes": "Blah blah blah",
        //   "equipmentId": "xxx"
        // }
      ],
      "ingredients": {
        "hops": [
          // {
          //   "name": "Citra",
          //   "aa": 11.0,
          //   "oz": 1,
          //   "time": 60,
          //   "type": "leaf",
          //   "costOz": 5.00
          // }
        ],
        "fermentables": [
          // {
          //   "name": "Briess 2-row",
          //   "lb": 6,
          //   "srm": 2.0,
          //   "potential": 1.039,
          //   "costLb": 1.50
          // }
        ],
        "water": [
          {
            // "name": "Portland, OR",
            // "gallons": 7,
            // "boilTopOff": false,
            // "fermenterTopOff": false,
            "baseProfile": {
              // "Ca": 2.00,
              // "Mg": 1.00,
              // "Na": 2.00,
              // "SO4": 0.00,
              // "Cl": 2.00,
              // "HCO3": 9.00,
              // "pH": 6.7
            },
            "additions": {
              // "CaCO3": 0,
              // "NaHCO3": 0,
              // "CaSO4": 0,
              // "CaCL2": 0,
              // "MgSO4": 0,
              // "NaCl": 0
            }
          }
        ],
        "yeast": [
          {
            // "name": "Citrus",
            // "attenuation": 70.0,
            // "flocculation": "high",
            // "time": 0,
            // "volume": "2L",
            "temperature": {
              // "low": 64.0,
              // "high": 71.0,
              // "actual": 67.5
            },
            // "productionDate": "2016-06-06T18:25:43.511Z"
          }
        ]
      }
    }
    this.loadFromServer = this.loadFromServer.bind(this)
    this.calculateIbu = this.calculateIbu.bind(this)
    this.calculateOg = this.calculateOg.bind(this)
  }

  render () {
    return (
      <div>
        <HopSection
          {...this.state}
          addHops={this.addHops.bind(this)}
        />
        <MaltSection {...this.state}/>
      </div>
    )
  }

  addHops (hop) {
    // TODO: validate
    // send to server curl -H "Content-Type: application/json" -X POST -d '{"name": "galaxy", "aa": 13.0, "time": 60, "type": "pellet"}' https://brewhome.cloudant.com/hops
    let {hops} = this.state.ingredients
    hops.push(hop)
    let payload = {
      '_id': this.state._id,
      '_rev': this.state._rev,
      ingredients: {
        hops: hops
      }
    }
    $.ajax({
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      type: 'PUT',
      data: JSON.stringify(payload),
      success: function (data) {
        this.loadFromServer()
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString())
      }.bind(this)
    })
  }

  calculateIbu () {
    // TODO: Toggle for leaf/pellets
    let og = 1.050
    let ibu = 0
    // via http://www.rooftopbrew.net/ibu.php
    this.state.ingredients.hops.forEach((e, i) => {
      ibu += (1.65 * Math.pow(0.000125, og - 1)) *
                ((1-Math.pow(Math.E, (-0.04 * e.time))) / 4.15) *
                ((e.aa/100 * e.oz * 7490) / gallons)
    })

    // let ibu = (1.65 * Math.pow(0.000125, og - 1)) *
    //           ((1-Math.pow(Math.e, (-0.04 * time))) / 4.15) *
    //           ((aa/100 * oz * 7490) / gallons)
    ibu = Math.round(ibu)
    this.setState({ibu})
  }

  calculateOg () {
    let efficiency = 0.75
    let og = 0
    this.state.ingredients.fermentables.forEach(e => {
      console.log("adding: ", e)
      let point = (e.potential * 1000) - 1000
      og += (e.lb * point)
    })
    og = og * efficiency
    og = Math.round(og / gallons)
    og = (og / 1000) + 1
    this.setState({og})
  }

  loadFromServer () {
    // TODO: sort data by time desc
    $.ajax({
      url: url + '/_find',
      contentType: 'application/json',
      type: 'POST',
      dataType: 'json',
      cache: false,
      data: JSON.stringify({
        selector: {
          user: user
        },
        limit: 10
      }),
      success: function (data) {
        let recipe = data.docs[0]
        this.setState(recipe)
        this.calculateIbu()
        this.calculateOg()
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString())
      }.bind(this)
    })
  }

  componentDidMount () {
    this.loadFromServer()
    setInterval(this.loadFromServer, pollInterval)
  }

}

// curl -H "Content-Type: application/json" -X POST -d '{"name": "galaxy", "aa": 13.0, "time": 60, "type": "pellet"}' https://brewhome.cloudant.com/hops
// curl https://brewhome.cloudant.com/hops/74af3937271303b42023b40e19892b92
