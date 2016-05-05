var React = require('react');
var TraitStore = require('../../stores/trait.js');
var TraitActions = require('../../actions/trait_actions.js');
var TraitList = require('../../constants/traits.js');

var Trait = React.createClass({
  toggleSelected: function () {
    if (TraitStore.hasSelected(this.props.trait)) {
      TraitActions.removeTrait(this.props.trait);
    } else if (!TraitStore.hasExcluded(this.props.trait)) {
      TraitActions.addTrait(this.props.trait);
    }
  },

  setTooltip: function () {
    TraitActions.mouseover(this.props.trait);
  },

  traitClassName: function () {
    return this.props.banned ? 'trait disabled' : 'trait';
  },

  costClassName: function () {
    return this.props.trait.cost > 0 ? 'trait-cost bad' : 'trait-cost good';
  },

  render: function () {
    return <li
      className={this.traitClassName()}
      onClick={this.toggleSelected}
      onMouseOver={this.setTooltip}>
      <div className='trait-wrapper'>
        <img src={this.props.trait.icon_url} className='trait-icon' />
        <div className='trait-name'>{this.props.trait.name}</div>
      </div>
      <div className={this.costClassName()}>{this.props.trait.cost}</div>
    </li>;
  }
});

module.exports = Trait;
