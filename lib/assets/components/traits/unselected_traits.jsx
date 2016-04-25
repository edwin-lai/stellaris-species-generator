var React = require('react');
var TraitStore = require('../../stores/trait.js');
var TraitActions = require('../../actions/trait_actions.js');
var TraitList = require('../../constants/traits.js');
var Trait = require('./trait.jsx');

var getTraitsState = function () {
  return {
    active: TraitStore.all(),
    banned: TraitStore.excludedTraits()
  };
};

var UnselectedTraits = React.createClass({
  getInitialState: function () {
    return getTraitsState();
  },

  componentDidMount: function () {
    var that = this;
    this.listener = TraitStore.addListener(that._onChange);
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
    return <div className='unselected-traits'>
      {Object.keys(TraitList).map(function(key) {
        var value = TraitList[key];
        if (!that.state.active.has(value)) {
          return <Trait
              key={key}
              trait={value}
              banned={that.state.banned.has(value)
                || value.cost > TraitStore.pointsLeft()
                || TraitStore.picksLeft() < 1}/>;
        }
      })}
    </div>;
  }
});

module.exports = UnselectedTraits;
