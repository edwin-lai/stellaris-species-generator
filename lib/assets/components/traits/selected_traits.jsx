var React = require('react');
var TraitStore = require('../../stores/trait.js');
var TraitActions = require('../../actions/trait_actions.js');
var TraitList = require('../../constants/traits.js');
var Trait = require('./trait.jsx');

var getTraitsState = function () {
  var traitStrings = new Set([...TraitStore.all()].map(function (trait) {
    return JSON.stringify(trait);
  }));
  return {
    active: traitStrings,
  };
};

var SelectedTraits = React.createClass({
  getInitialState: function () {
    return getTraitsState();
  },

  componentDidMount: function () {
    var that = this;
    this.listener = TraitStore.addListener(that._onChange);
    this.setState(getTraitsState());
  },

  componentWillUnmount: function () {
    var that = this;
    this.listener.remove();
  },

  _onChange: function () {
    this.setState(getTraitsState());
  },

  render: function () {
    var that = this;
    return <div className='selected-traits'>
      {Object.keys(TraitList).map(function(key) {
        if (that.state.active.has(JSON.stringify(TraitList[key]))) {
          return <Trait key={key} trait={TraitList[key]}/>;
        }
      })}
    </div>;
  }
});

module.exports = SelectedTraits;
