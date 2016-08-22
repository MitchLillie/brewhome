import React from 'react'
import Malt from './Malt'

const MaltList = React.createClass({
  render: function () {
    let list = this.props.malts.map((malt, i) => {
      return <Malt {...malt} key={i + 1} />
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
