import React from 'react'
import Hop from './Hop'

const HopList = React.createClass({
  render: function () {
    let list = this.props.data.map(hop => {
      return <Hop {...hop} key={hop._id} />
    })
    return (
    <div className='hops-list'>
      <ul>
        {list}
      </ul>
    </div>
    )
  }
})

export default HopList
