var React = require('react');
var TraitStore = require('../../stores/trait.js');
var TraitActions = require('../../actions/trait_actions.js');
var TraitList = require('../../constants/traits.js');

var Trait = React.createClass({
  toggleSelected: function () {
    if (TraitStore.hasSelected(this.props.trait)) {
      TraitActions.removeTrait(this.props.trait);
    } else {
      TraitActions.addTrait(this.props.trait);
    }
  },

  render: function () {
    return <li className='trait' onClick={this.toggleSelected}>
      <img src={this.props.trait.icon_url} className='trait-icon' />
      <content className='trait-name'>{this.props.trait.name}</content>
      <content className='trait-cost'>{this.props.trait.cost}</content>
    </li>;
  }
});

module.exports = Trait;
