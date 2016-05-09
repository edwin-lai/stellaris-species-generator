var React = require('react');
var SpeciesStore = require('../../stores/species.js');
var SpeciesActions = require('../../actions/species_actions.js');
var Portraits = require('./portraits.jsx');

var Species = React.createClass({
  getInitialState: function () {
    return {
      speciesName: SpeciesStore.getName(),
      empire: SpeciesStore.getEmpire(),
      portrait: SpeciesStore.getPortrait()
    };
  },

  componentDidMount: function () {
    var that = this;
    this.listener = SpeciesStore.addListener(that._portraitChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _portraitChange: function () {
    this.setState({portrait: SpeciesStore.getPortrait()});
  },

  setSpeciesName: function (event) {
    SpeciesActions.setSpeciesName(event.target.value);
    this.setState({speciesName: event.target.value});
  },

  setEmpire: function (event) {
    SpeciesActions.setEmpire(event.target.value);
    this.setState({empire: event.target.value});
  },

  render: function () {
    return <div className='species'>
      <div className='top-wrapper'>
        <div className='portrait-wrapper'>
          <img
            src={this.state.portrait}
            className='species-portrait'
            alt='Species Portrait'/>
        </div>
        <div className='name-wrapper'>
          <input
            type='text'
            className='species-name'
            value={this.state.speciesName}
            onChange={this.setSpeciesName}
            placeholder='Species Name'
            />
          <input
            type='text'
            className='empire-name'
            value={this.state.empire}
            onChange={this.setEmpire}
            placeholder='Empire Name'
            />
        </div>
      </div>
      <Portraits />
    </div>;
  }
});

module.exports = Species;
