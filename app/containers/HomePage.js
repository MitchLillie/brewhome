import React, { Component } from 'react'
import * as $ from 'jquery'

import HopSection from '../components/hops/HopSection'
import MaltSection from '../components/malt/MaltSection'
import YeastSection from '../components/yeast/YeastSection'

const url = 'https://brewhome.cloudant.com/recipes'
const pollInterval = 2000

const user = '1'
const gallons = 5

export default class HomePage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      // '_id': 'xxx',
      // 'user': 'xxx',
      // 'name': 'American Wheat',
      // 'style': '1D',
      // 'gallons': 5.5,
      'brewHistory': [
        // {
        //   'id': 'xxx',
        //   'date': '2016-06-06T18:25:43.511Z',
        //   'notes': 'Blah blah blah',
        //   'equipmentId': 'xxx'
        // }
      ],
      'ingredients': {
        'hops': [
          // {
          //   'name': 'Citra',
          //   'aa': 11.0,
          //   'oz': 1,
          //   'time': 60,
          //   'type': 'leaf',
          //   'costOz': 5.00
          // }
        ],
        'fermentables': [
          // {
          //   'name': 'Briess 2-row',
          //   'lb': 6,
          //   'srm': 2.0,
          //   'potential': 1.039,
          //   'costLb': 1.50
          // }
        ],
        'water': [
          {
            // 'name': 'Portland, OR',
            // 'gallons': 7,
            // 'boilTopOff': false,
            // 'fermenterTopOff': false,
            'baseProfile': {
              // 'Ca': 2.00,
              // 'Mg': 1.00,
              // 'Na': 2.00,
              // 'SO4': 0.00,
              // 'Cl': 2.00,
              // 'HCO3': 9.00,
              // 'pH': 6.7
            },
            'additions': {
              // 'CaCO3': 0,
              // 'NaHCO3': 0,
              // 'CaSO4': 0,
              // 'CaCL2': 0,
              // 'MgSO4': 0,
              // 'NaCl': 0
            }
          }
        ],
        'yeast': [
          {
            // 'name': 'Citrus',
            // 'attenuation': 70.0,
            // 'flocculation': 'high',
            // 'time': 0,
            // 'volume': '2L',
            'temperature': {
              // 'low': 64.0,
              // 'high': 71.0,
              // 'actual': 67.5
            }
            // 'productionDate': '2016-06-06T18:25:43.511Z'
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
      <div className='container'>
        <form method='POST' id='hop-form'>
        </form>
        <form method='POST' id='fermentable-form'>
        </form>
        <form method='POST' id='yeast-form'>
        </form>
        <div className='row'>
          <div className='col-sm-4'>
            <MaltSection
              {...this.state}
              addMalt={this.addMalt.bind(this)}
            />
            <HopSection
              {...this.state}
              addHops={this.addHops.bind(this)}
            />
            <YeastSection
              {...this.state}
              addYeast={this.addYeast.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }

//   <div class="container">
//   <br>
// </div>
// <form method="POST" id="hop-form">
// </form>
// <form method="POST" id="fermenable-form">
// </form>
// <form method="POST" id="yeast-form">
// </form>
// <div class="container">
//   <div class="row">
//     <div class="col-md-4">
//       <div class="panel panel-default">
//         <div class="panel-heading">
//           <h5>Yeast <span class="glyphicon glyphicon-cog pull-right"></span></h5>
//
//         </div>
//         <div class="panel-body">
//           <table class="table table-hover table-condensed table-no-bottom">
//             <tr>
//               <td class="col-md-8">
//                 Imperial Organic Citrus
//               </td>
//               <td class="col-md-4">
//                 Added: day 0
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Brett dregs
//               </td>
//               <td>
//                 Added: day 8
//               </td>
//             </tr>
//             <tr class="collapse" id="yeast-form-input">
//               <td>
//                 <input type="text" class="form-control" form="yeast-form" />
//               </td>
//               <td>
//                 <input type="text" class="form-control" form="yeast-form" />
//               </td>
//             </tr>
//             <tr>
//               <td colspan="5">
//                 <button type="button" data-toggle="collapse" data-target="#yeast-form-input" class="btn btn-default">+</button>
//               </td>
//             </tr>
//           </table>
//         </div>
//       </div>
//       <div class="panel panel-default">
//         <div class="panel-heading">
//           <h5>Fermentables <span class="glyphicon glyphicon-cog pull-right"></span></h5>
//         </div>
//         <div class="panel-body">
//           <table class="table table-hover table-condensed table-no-bottom">
//             <tr>
//               <td class="col-md-6">
//                 Briess 2-row
//               </td>
//               <td class="col-md-2">
//                 8 lb
//               </td>
//               <td class="col-md-4">
//                 2.0 srm
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Munich
//               </td>
//               <td>
//                 3 lb
//               </td>
//               <td>
//                 2.0 srm
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Carafa Special III
//               </td>
//               <td>
//                 4 oz
//               </td>
//               <td>
//                 200.0 srm
//               </td>
//             </tr>
//             <tr class="collapse" id="fermentable-form-input">
//               <td>
//                 <input type="text" class="form-control" form="fermenable-form" />
//               </td>
//               <td>
//                 <input type="text" class="form-control" form="fermentable-form" />
//               </td>
//               <td>
//                 <input type="text" class="form-control" form="fermentable-form" />
//               </td>
//             </tr>
//             <tr>
//               <td colspan="5">
//                 <button type="button" data-toggle="collapse" data-target="#fermentable-form-input" class="btn btn-default">+</button>
//               </td>
//             </tr>
//           </table>
//         </div>
//       </div>
//       <div class="panel panel-default">
//         <div class="panel-heading">
//           <h5>Hops <span class="glyphicon glyphicon-cog pull-right"></span></h5>
//         </div>
//         <div class="panel-body">
//           <table class="table table-hover table-condensed table-no-bottom">
//             <tr>
//               <td>
//                 Simcoe
//               </td>
//               <td>
//                 1.5 oz
//               </td>
//               <td>
//                 12.3%
//               </td>
//               <td>
//                 60 min
//               </td>
//               <td>
//                 pellet
//               </td>
//             </tr>
//             <tr>
//               <td class="col-md-4">
//                 Citra
//               </td>
//               <td class="col-md-2">
//                 1 oz
//               </td>
//               <td class="col-md-2">
//                 11%
//               </td>
//               <td class="col-md-2">
//                 10 min
//               </td>
//               <td class="col-md-2">
//                 pellet
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Saaz
//               </td>
//               <td>
//                 1 oz
//               </td>
//               <td>
//                 3.3%
//               </td>
//               <td>
//                 0 min
//               </td>
//               <td>
//                 pellet
//               </td>
//             </tr>
//             <tr class="dry-hop">
//               <td>
//                 Citra
//               </td>
//               <td>
//                 1 oz
//               </td>
//               <td>
//                 3.3%
//               </td>
//               <td>
//                 3 days
//               </td>
//               <td>
//                 pellet
//               </td>
//             </tr>
//             <tr class="collapse" id="hop-form-input">
//               <td>
//                 <input type="text" class="form-control" form="hop-form" />
//               </td>
//               <td>
//                 <input type="text" class="form-control" form="hop-form" />
//               </td>
//               <td>
//                 <input type="text" class="form-control" form="hop-form" />
//               </td>
//               <td>
//                 <input type="text" class="form-control" form="hop-form" />
//               </td>
//               <td>
//                 <input type="text" class="form-control" form="hop-form" />
//               </td>
//             </tr>
//             <tr>
//               <td colspan="5">
//                 <button type="button" data-toggle="collapse" data-target="#hop-form-input" class="btn btn-default">+</button>
//               </td>
//             </tr>
//           </table>
//         </div>
//       </div>
//     </div>
//     <div class="col-md-4">
//       <div class="panel panel-default">
//         <div class="panel-heading">
//           <h5>Water <span class="glyphicon glyphicon-cog pull-right"></span></h5>
//         </div>
//         <div class="panel-body">
//           <table class="table table-hover table-condensed table-no-bottom">
//             <tr>
//               <td rowspan="8">
//                 Portland, OR, USA
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Ca<sup>+2</sup>
//               </td>
//               <td>
//                 2
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Mg<sup>+2</sup>
//               </td>
//               <td>
//                 1
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Na<sup>+</sup>
//               </td>
//               <td>
//                 3
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Cl<sup>-</sup>
//               </td>
//               <td>
//                 3
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 SO<sub>4</sub><sup>-2</sup>
//               </td>
//               <td>
//                 3
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Alkalinity
//               </td>
//               <td>
//                 11 (CaCO<sub>3</sub>)
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 pH
//               </td>
//               <td>
//                 7.9
//               </td>
//             </tr>
//           </table>
//           <table class="table table-hover table-condensed table-no-bottom">
//             <tr>
//               <td class="active">
//                 Target: Chimay
//               </td>
//             </tr>
//           </table>
//           <table class="table table-hover table-condensed table-no-bottom">
//             <tr>
//               <td rowspan="10">
//                 Additions
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Gypsum
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Epsom Salt
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Table salt
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Calcium chloride
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Magnesium chloride
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Chalk
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Baking soda
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Slaked lime
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Lye
//               </td>
//               <td>
//                 0 g
//               </td>
//             </tr>
//
//           </table>
//         </div>
//       </div>
//     </div>
//     <div class="col-md-4">
//       <div class="panel panel-primary">
//         <div class="panel-heading">
//           <h5>Hodge Podge Pale</h5>
//         </div>
//         <div class="panel-body">
//           <table class="table table-hover table-condensed table-no-bottom td-right">
//             <tr>
//               <td>
//                 Style
//               </td>
//               <td>
//                 18B. American Pale Ale
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 SRM
//               </td>
//               <td>
//                 <div class="square" style="background:#EA8F00;">
//                   <span>7</span>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>
//
//               </td>
//               <td>
//                 5 gallons
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 OG - FG
//               </td>
//               <td>
//                 1.058 - 1.008
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 ABV
//               </td>
//               <td>
//                 5.2%
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 IBU
//               </td>
//               <td>
//                 23
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 Style
//               </td>
//               <td>
//                 18B. American Pale Ale
//               </td>
//             </tr>
//           </table>
//         </div>
//       </div>
//       <ul class="nav nav-pills">
//         <li class="active">
//           <a href="#">Recipe</a>
//         </li>
//         <li>
//           <a href="#">Mash</a>
//         </li>
//         <li >
//           <a data-toggle="tooltip" data-placement="bottom" title="Your selected equipment profile is not large enough" href="#">Equipment</a>
//           <span class="badge badge-notify">!</span>
//         </li>
//         <li>
//           <a href="#">Log</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>

  addHops (hop) {
    // TODO: validate
    // send to server curl -H 'Content-Type: application/json' -X POST -d '{'name': 'galaxy', 'aa': 13.0, 'time': 60, 'type': 'pellet'}' https://brewhome.cloudant.com/hops
    let payload = {...this.state}
    payload.ingredients.hops.push(hop)
    $.ajax({
      url: url + '/' + this.state._id,
      dataType: 'json',
      contentType: 'application/json',
      type: 'PUT',
      data: JSON.stringify(payload),
      success: function (data) {
        this.loadFromServer()
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString())
      }
    })
  }

  addMalt (malt) {
    // TODO: validate
    let payload = {...this.state}
    payload.ingredients.fermentables.push(malt)
    $.ajax({
      url: url + '/' + this.state._id,
      dataType: 'json',
      contentType: 'application/json',
      type: 'PUT',
      data: JSON.stringify(payload),
      success: function (data) {
        this.loadFromServer()
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString())
      }
    })
  }

  addYeast (yeast) {
    // TODO: validate
    let payload = {...this.state}
    payload.ingredients.yeast.push(yeast)
    $.ajax({
      url: url + '/' + this.state._id,
      dataType: 'json',
      contentType: 'application/json',
      type: 'PUT',
      data: JSON.stringify(payload),
      success: function (data) {
        this.loadFromServer()
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString())
      }
    })
  }

  calculateIbu () {
    // TODO: Toggle for leaf/pellets
    let ibu = 0
    // via http://www.rooftopbrew.net/ibu.php
    this.state.ingredients.hops.forEach((e, i) => {
      ibu += (1.65 * Math.pow(0.000125, this.state.og - 1)) *
             ((1 - Math.pow(Math.E, (-0.04 * e.time))) / 4.15) *
             ((e.aa / 100 * e.oz * 7490) / gallons)
    })
    ibu = Math.round(ibu)
    this.setState({ibu})
  }

  calculateOg () {
    let efficiency = 0.75
    let og = 0
    this.state.ingredients.fermentables.forEach(e => {
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
        console.log('data: ', data)
        this.setState(recipe)
        this.calculateIbu()
        this.calculateOg()
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(url, status, err.toString())
      }
    })
  }

  componentDidMount () {
    this.loadFromServer()
    setInterval(this.loadFromServer, pollInterval)
  }

}

// curl -H 'Content-Type: application/json' -X POST -d '{'name': 'galaxy', 'aa': 13.0, 'time': 60, 'type': 'pellet'}' https://brewhome.cloudant.com/hops
// curl https://brewhome.cloudant.com/hops/74af3937271303b42023b40e19892b92
