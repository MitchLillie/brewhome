import React from 'react'
import Malt from './Malt'
import MaltForm from './MaltForm'

const MaltList = React.createClass({
  render: function () {
    let list = this.props.malts.map((malt, i) => {
      return <Malt {...malt} key={i + 1} />
    })
    return (
    <table className='table table-hover table-condensed table-no-bottom malt-list'>
      <tbody>
        {list}
        <MaltForm onMaltSubmit={this.props.onMaltSubmit}/>
        <tr>
          <td colSpan='5'>
            <button type='button' data-toggle='collapse' data-target='#fermentable-form-input' className='btn btn-default'>+</button>
          </td>
        </tr>
      </tbody>
    </table>
    )
  },
  propTypes: {
    malts: React.PropTypes.array,
    onMaltSubmit: React.PropTypes.func
  }
})

export default MaltList
