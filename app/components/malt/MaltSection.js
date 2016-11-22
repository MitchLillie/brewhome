import React from 'react'

import MaltList from './MaltList'
import OG from './OG'

const MaltSection = React.createClass({
  handleMaltSubmit: function (malt) {
    this.props.addMalt(malt)
  },
  render: function () {
    return (
      <div className='maltBox panel panel-default'>
        <div className='panel-heading'>
          <h5>Fermentables <span className='glyphicon glyphicon-cog pull-right'></span></h5>
        </div>
        <div className='panel-body'>
          <MaltList malts={this.props.ingredients.fermentables} onMaltSubmit={this.handleMaltSubmit}/>
        </div>
      </div>
    )
  },
//   <div class="panel panel-default">
//   <div class="panel-heading">
//     <h5>Fermentables <span class="glyphicon glyphicon-cog pull-right"></span></h5>
//   </div>
//   <div class="panel-body">
//     <table class="table table-hover table-condensed table-no-bottom">
//       <tr>
//         <td class="col-md-6">
//           Briess 2-row
//         </td>
//         <td class="col-md-2">
//           8 lb
//         </td>
//         <td class="col-md-4">
//           2.0 srm
//         </td>
//       </tr>
//       <tr>
//         <td>
//           Munich
//         </td>
//         <td>
//           3 lb
//         </td>
//         <td>
//           2.0 srm
//         </td>
//       </tr>
//       <tr>
//         <td>
//           Carafa Special III
//         </td>
//         <td>
//           4 oz
//         </td>
//         <td>
//           200.0 srm
//         </td>
//       </tr>
//       <tr class="collapse" id="fermentable-form-input">
//         <td>
//           <input type="text" class="form-control" form="fermenable-form" />
//         </td>
//         <td>
//           <input type="text" class="form-control" form="fermentable-form" />
//         </td>
//         <td>
//           <input type="text" class="form-control" form="fermentable-form" />
//         </td>
//       </tr>
//       <tr>
//         <td colspan="5">
//           <button type="button" data-toggle="collapse" data-target="#fermentable-form-input" class="btn btn-default">+</button>
//         </td>
//       </tr>
//     </table>
//   </div>
// </div>
  propTypes: {
    addMalt: React.PropTypes.func,
    ingredients: React.PropTypes.object,
    og: React.PropTypes.number
  }
})

export default MaltSection
