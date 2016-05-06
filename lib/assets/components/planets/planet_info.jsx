var React = require('react'),
    PlanetStore = require('../../stores/planet'),
    PlanetData= require('../../constants/planet_data');

var PlanetInfo = React.createClass({
  getInitialState: function () {
    return ({currentPlanet: PlanetStore.currentPlanet()});
  },

  componentDidMount: function () {
    this.planetListener = PlanetStore.addListener(this._planetChange);
  },

  componentWillUnmount: function () {
    this.planetListener.remove();
  },

  _planetChange: function () {
    this.setState({
      currentPlanet: PlanetStore.currentPlanet()
    });
  },

  render: function() {
    var planet = this.state.currentPlanet;

    return (
      <section className="planet-info">
        <h3 className="planet-name">{planet.name}</h3>
        <p className="planet-description">{planet.description}</p>
        <h3 className="planet-preference">{planet.name} Preference</h3>
      </section>
    );
  }
});

module.exports = PlanetInfo;
