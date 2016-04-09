var React = require('react'),
    PlanetStore = require('../stores/planet'),
    PlanetInfo = require('../constants/planet_info');

var PlanetInfo = React.createClass({
  getInitialState: function () {
    return {currentPlanet: PlanetStore.currentPlanet()};
  },

  componentDidMount: function () {
    this.planetListener = PlanetStore.addListener(this._planetChange);
  },

  componentWillUnmount: function () {
    this.planetListener.remove();
  },

  _planetChange: function () {
    this.setState({
      currentPlanet: PlanetStore.currentPlanet(),
    });
  },

  render: function() {
    var planet = this.state.currentPlanet;

    return (
      <section className="planet-info">
        <h3 className="planet-name">{PlanetInfo[planet].description}</h3>
        <p className="planet-description">{PlanetInfo[planet].description}</p>
        <img className="light-bulb" src=""/>
        <h3 className="planet-preference">{PlanetInfo[planet].name} Preference</h3>
      </section>
    );
  }

});

module.exports = PlanetInfo;
