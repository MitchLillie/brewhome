require('../less/main.less')

'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
// var nano = require('nano')('https://brewhome.cloudant.com/hops/_all_docs')
// var db = nano.use('hops')

import HopSection from './components/hops/HopSection'

ReactDOM.render(
  <HopSection url='https://brewhome.cloudant.com/hops' pollInterval={2000}/>,
  document.getElementById('content')
)

// curl -H "Content-Type: application/json" -X POST -d '{"name": "galaxy", "aa": 13.0, "time": 60, "type": "pellet"}' https://brewhome.cloudant.com/hops
// curl https://brewhome.cloudant.com/hops/74af3937271303b42023b40e19892b92
