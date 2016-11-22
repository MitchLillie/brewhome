import React from 'react'
import Hop from './Hop'
import HopForm from './HopForm'

const HopList = React.createClass({
  render: function () {
    let list = this.props.hops.map((hop, i) => {
      return <Hop {...hop} key={i + 1} />
    })
    return (
      <table className='table table-hover table-condensed table-no-bottom malt-list'>
        <tbody>
          {list}
          <HopForm onHopSubmit={this.props.handleHopSubmit}/>
          <tr>
            <td colSpan='5'>
              <button type='button' data-toggle='collapse' data-target='#hop-form-input' className='btn btn-default'>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  },
  propTypes: {
    hops: React.PropTypes.array,
    handleHopSubmit: React.PropTypes.func
  }
})

export default HopList
