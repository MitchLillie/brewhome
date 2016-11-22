import React from 'react'
import Yeast from './Yeast'
import YeastForm from './YeastForm'

const YeastList = React.createClass({
  render: function () {
    let list = this.props.yeast.map((yeast, i) => {
      return <Yeast {...yeast} key={i + 1} />
    })
    return (
    <table className='table table-hover table-condensed table-no-bottom yeast-list'>
      <tbody>
        {list}
        <YeastForm onYeastSubmit={this.props.onYeastSubmit}/>
        <tr>
          <td colSpan='2'>
            <button type='button' data-toggle='collapse' data-target='#yeast-form-input' className='btn btn-default'>+</button>
          </td>
        </tr>
      </tbody>
    </table>
    )
  },
  propTypes: {
    yeast: React.PropTypes.array,
    onYeastSubmit: React.PropTypes.func
  }
})

export default YeastList
