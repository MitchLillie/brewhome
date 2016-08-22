import React from 'react'
import Hop from './Hop'

const HopList = React.createClass({
  render: function () {
    let list = this.props.hops.map((hop, i) => {
      return <Hop {...hop} key={i + 1} />
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
