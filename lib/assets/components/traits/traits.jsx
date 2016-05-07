var React = require('react');
var TraitStore = require('../../stores/trait.js');
var UnselectedTraits = require('./unselected_traits.jsx');
var SelectedTraits = require('./selected_traits.jsx');
var TraitsInfo = require('./traits_info.jsx');

var TraitsMenu = React.createClass({
  render: function () {
    return <div className='traits'>
      <TraitsInfo />
      <UnselectedTraits />
      <SelectedTraits />
    </div>;
  }
});

module.exports = TraitsMenu;
