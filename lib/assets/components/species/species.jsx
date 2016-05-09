var React = require('react');
var SpeciesStore = require('../../stores/species.js');
var SpeciesActions = require('../../actions/species_actions.js');
var Portraits = require('./portraits.jsx');

var Species = React.createClass({
  getInitialState: function () {
    return {
      speciesName: SpeciesStore.getName(),
      speciesHistory: SpeciesStore.getHistory(),
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
    if (this.fileListener) {
      this.reader.removeEventListener('load', this.fileListener);
    }
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

  setSpeciesHistory: function (event) {
    SpeciesActions.setSpeciesHistory(event.target.value);
    this.setState({speciesHistory: event.target.value});
  },

  handleFile: function (event) {
    var file = event.target.files[0];
    this.reader = new FileReader();
    var that = this;

    this.fileListener = this.reader.addEventListener('load', function () {
      SpeciesActions.setPortrait(that.reader.result);
    });

    if (file.type.slice(0,5) === 'image') {
      this.reader.readAsDataURL(file);
    } else {
      alert('Nice try.');
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
