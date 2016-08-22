// require('../less/main.less')
//
// 'use strict'
//
// import React from 'react'
// import ReactDOM from 'react-dom'
// // var nano = require('nano')('https://brewhome.cloudant.com/hops/_all_docs')
// // var db = nano.use('hops')
//
// import HopSection from './components/hops/HopSection'
// import MaltSection from './components/malt/MaltSection'
//
// let user = 1
//
// let App = React.createClass({
//   render: () => {
//     return (
//       <div>
//         <HopSection />
//         <MaltSection />
//       </div>
//     )
//   },
//   loadFromServer: function() {
//     console.log("hi")
//     // TODO: sort data by time desc
//     $.ajax({
//       url: this.props.url + '/_find',
//       contentType: 'application/json',
//       type: 'POST',
//       dataType: 'json',
//       cache: false,
//       data: JSON.stringify({
//         selector: {
//           user: user
//         },
//         limit: 10
//       }),
//       success: function (data) {
//         let recipes = data.docs
//         this.setState({data: recipes})
//       }.bind(this),
//       error: function (xhr, status, err) {
//         console.error(this.props.url, status, err.toString())
//       }.bind(this)
//     })
//   },
//   componentDidMount: function () {
//     console.log('hop mounted!')
//     this.loadFromServer()
//     setInterval(this.loadFromServer, this.props.pollInterval)
//   },
//   getInitialState: function () {
//     return {data: []}
//   },
// })
//
// ReactDOM.render(
//   <App url='https://brewhome.cloudant.com/hops' pollInterval={2000}/>,
//   document.getElementById('content')
// )
//
// // curl -H "Content-Type: application/json" -X POST -d '{"name": "galaxy", "aa": 13.0, "time": 60, "type": "pellet"}' https://brewhome.cloudant.com/hops
// // curl https://brewhome.cloudant.com/hops/74af3937271303b42023b40e19892b92
