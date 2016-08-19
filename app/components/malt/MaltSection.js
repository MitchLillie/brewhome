import React from 'react'

import MaltList from './MaltList'
import OG from './OG'
// import MaltForm from './MaltForm'

var data = [
  {
    '_id': 'sdjisdi29',
    'name': 'Briess 2-row',
    'lb': 6,
    'srm': 2.0,
    'potential': 1.039,
    'costLb': 1.50
  }
]

const MaltSection = React.createClass({
  getInitialState: function () {
    return {data: [], ibu: 0}
  },
  componentDidMount: function () {
    console.log('malt mounted!')
    this.setState({data: data})
  },
  calculateOG: function () {
    
  },
  render: function () {
    // return (
    //   <div className='maltBox'>
    //     <h4>Malt! More Malt!</h4>
    //   </div>
    // )
    return (
      <div className='maltBox'>
        Malt!
        <MaltList data={this.state.data}/>
        <OG data={this.state.data}/>
      </div>
    )
    // <MaltForm onMaltSubmit={this.handleMaltSubmit}/>
  }
})

export default MaltSection
