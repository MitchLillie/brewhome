import React from 'react'
import YeastList from './YeastList'
import YeastForm from './YeastForm'

const YeastSection = React.createClass({
  handleYeastSubmit: function (yeast) {
    this.props.addYeast(yeast)
  },
  render: function () {
    return (
      <div className='yeastBox'>
        Yeast!
        <YeastList yeast={this.props.ingredients.yeast}/>
        <YeastForm onYeastSubmit={this.handleYeastSubmit}/>
      </div>
    )
    // <FG fg={this.props.fg}/>
  },
  propTypes: {
    addYeast: React.propTypes.func,
    ingredients: React.propTypes.array
  }
})

export default YeastSection
