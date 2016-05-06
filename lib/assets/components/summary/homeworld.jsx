var React = require('react');
var PlanetStore = require('../../stores/planet.js');

var Homeworld = React.createClass({
  render: function () {
    var planet = PlanetStore.currentPlanet();
    return <div className='summary-homeworld'>
      <label className='summary-homeworld-name'>
        {PlanetStore.getHomeworld()}
      </label>
      <img className='summary-planet-image' src={planet.imageUrl} />
      <label className='summary-planet'>{planet.name + 'World'}</label>
    </div>;
  }
});

module.exports = Homeworld;
