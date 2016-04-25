var React = require('react');
var TraitStore = require('../../stores/trait.js');
var TraitActions = require('../../actions/trait_actions.js');
var TraitList = require('../../constants/traits.js');

var getTraitsState = function () {
  return {
    trait: TraitStore.mouseover(),
    pointsLeft: TraitStore.pointsLeft(),
    picksLeft: TraitStore.picksLeft()
  };
};

var TraitsInfo = React.createClass({
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

  mouseoverTrait: function () {
    if (this.state.trait) {
      return <div className='mouseover-trait'>
        <h2 className='mouseover-trait-name'>{this.state.trait.name}</h2>
        <p className='trait-description'>{this.state.trait.description}</p>
        <p className='trait-effects'>{JSON.stringify(this.state.trait.effects)}</p>
      </div>;
    } else {
      return <div className='mouseover-trait'></div>;
    }
  },

  render: function () {
    return <div className='traits-info'>
      <h1 className='title'>Racial Traits</h1>
      <p className='instructions'>Pick genetic Traits for your Species.</p>
      <p className='points-left'>
        Trait Points Left:
        <content className={this.state.pointsLeft > 0 ? 'good' : 'neutral'}>
          {this.state.pointsLeft}
        </content>
      </p>
      <p className='picks-left'>
        Trait Picks Left:
        <content className={this.state.picksLeft > 0 ? 'good' : 'neutral'}>
          {this.state.picksLeft}
        </content>
      </p>
      {this.mouseoverTrait()}
    </div>;
  }
});

module.exports = TraitsInfo;