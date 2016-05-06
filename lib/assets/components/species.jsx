var React = require('react');
var SpeciesStore = require('../stores/species.js');
var SpeciesActions = require('../actions/species_actions.js');

var Species = React.createClass({
  getInitialState: function () {
    return {
      speciesName: SpeciesStore.getName(),
      speciesHistory: SpeciesStore.getHistory(),
      empire: SpeciesStore.getEmpire()
    };
  },

  setSpeciesName: function (event) {
    SpeciesActions.setSpeciesName(event.target.value);
    this.setState({speciesName: event.target.value});
  },

  setEmpire: function (event) {
    SpeciesActions.setEmpire(event.target.value);
    this.setState({empire: event.target.value});
  },

  setSpeciesHistory: function (event) {
    SpeciesActions.setSpeciesHistory(event.target.value);
    this.setState({speciesHistory: event.target.value});
  },

  render: function () {
    return <div className='species'>
      <input
        type='text'
        className='species-name'
        value={this.state.speciesName}
        onChange={this.setSpeciesName}
        placeholder='Species Name'
        />
      <input
        type='text'
        className='species-name'
        value={this.state.empire}
        onChange={this.setEmpire}
        placeholder='Empire Name'
        />
      <textarea
        id='species-history'
        className='species-history'
        value={this.state.speciesHistory}
        onChange={this.setSpeciesHistory}
        placeholder='History'
      />
    </div>;
  }
});

module.exports = Species;
