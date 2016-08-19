import React from 'react'
import Malt from './Malt'

const MaltList = React.createClass({
  render: function () {
    console.log('rendering maltlist ')
    console.log('this.props: ', this.props)
    let list = this.props.data.map(malt => {
      console.log('malt: ', malt)
      return <Malt {...malt} key={malt._id} />
    })
    return (
    <div className='malt-list'>
      <ul>
        {list}
      </ul>
    </div>
    )
  }
})

export default MaltList
