import React from 'react'
import YeastList from './YeastList'
import YeastForm from './YeastForm'

const YeastSection = React.createClass({
  handleYeastSubmit: function (yeast) {
    this.props.addYeast(yeast)
  },
  render: function () {
    return (
      <div className='yeastBox panel panel-default'>
        <div className='panel-heading'>
          <h5>Yeast <span className='glyphicon glyphicon-cog pull-right'></span></h5>
        </div>
        <div className='panel-body'>
          <YeastList yeast={this.props.ingredients.yeast} onYeastSubmit={this.handleYeastSubmit}/>
        </div>
      </div>
    )
    // <FG fg={this.props.fg}/>
  },
  propTypes: {
    addYeast: React.PropTypes.func,
    ingredients: React.PropTypes.object
  }
})

export default YeastSection
