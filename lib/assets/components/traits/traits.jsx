var React = require('react');
var TraitStore = require('../../stores/trait.js');
var TraitActions = require('../../actions/trait_actions.js');
var TraitList = require('../../constants/traits.js');
var Trait = require('./trait.jsx');
var UnselectedTraits = require('./unselected_traits.jsx');
var SelectedTraits = require('./selected_traits.jsx');

var TraitsMenu = React.createClass({
  render: function () {
    return <div>
      <UnselectedTraits />
      <SelectedTraits />
    </div>;
  }
});

module.exports = TraitsMenu;
