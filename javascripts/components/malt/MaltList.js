import React from 'react'
import Malt from './Malt'

const MaltList = React.createClass({
  render: function () {
    let list = this.props.data.map(m => {
      return <Malt {...m} key={m._id} />
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
