var React = require('react');
var SpeciesStore = require('../stores/species.js');
var SpeciesActions = require('../actions/species_actions.js');

var Species = React.createClass({
  getInitialState: function () {
    return {
      speciesName: SpeciesStore.getName(),
      speciesHistory: SpeciesStore.getHistory(),
      empire: SpeciesStore.getEmpire(),
      portrait: SpeciesStore.getPortrait()
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

  handleFile: function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      SpeciesActions.setPortrait(reader.result);
      this.setState({portrait: reader.result});
    });

    if (file.type.slice(0,5) === 'image') {
      reader.readAsDataURL(file);
    }
  },

  render: function () {
    return <div className='species'>
      <div className='top-wrapper'>
        <div className='portrait-wrapper'>
          <img
            src={this.state.portrait}
            className='species-portrait'
            alt='Species Portrait'/>
          <label className='file-upload' htmlFor='upload'>
            Upload
            <input id='upload' type='file' onChange={this.handleFile} />
          </label>
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
            className='species-name'
            value={this.state.empire}
            onChange={this.setEmpire}
            placeholder='Empire Name'
            />
        </div>
      </div>
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
