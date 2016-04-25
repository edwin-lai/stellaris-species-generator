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
        <table className='trait-effects'>{this.traitEffects()}</table>
      </div>;
    } else {
      return <div className='mouseover-trait'></div>;
    }
  },

  traitEffects: function () {
    var that = this;
    return <tbody>
      {Object.keys(that.state.trait.effects).map(function (name) {
        return <tr key={name}>
          <td>
            {name.split('_').map(function (word) {
              return word[0].toUpperCase() + word.slice(1);
            }).join(' ') + ': '}
          </td>
          <td className={that.state.trait.negative ? 'bad' : 'good'}>
            {that.state.trait.effects[name]}
          </td>
        </tr>;
      })}
    </tbody>;
  },

  render: function () {
    return <div className='traits-info'>
      <h1 className='title'>Racial Traits</h1>
      <p className='instructions'>Pick genetic Traits for your Species.</p>
      <table className='items-left'>
        <tbody>
          <tr className='points-left'>
            <td>Trait Points Left:</td>
            <td className={this.state.pointsLeft > 0 ? 'good' : 'neutral'}>
              {this.state.pointsLeft}
            </td>
          </tr>
          <tr className='picks-left'>
            <td>Trait Picks Left:</td>
            <td className={this.state.picksLeft > 0 ? 'good' : 'neutral'}>
              {this.state.picksLeft}
            </td>
          </tr>
        </tbody>
      </table>
      {this.mouseoverTrait()}
    </div>;
  }
});

module.exports = TraitsInfo;
