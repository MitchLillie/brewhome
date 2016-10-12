import React from 'react'
import Yeast from './Yeast'

const YeastList = React.createClass({
  render: function () {
    let list = this.props.yeast.map((yeast, i) => {
      return <Yeast {...yeast} key={i + 1} />
    })
    return (
    <div className='yeast-list'>
      <ul>
        {list}
      </ul>
    </div>
    )
  },
  propTypes: {
    yeast: React.propTypes.array
  }
})

export default YeastList
