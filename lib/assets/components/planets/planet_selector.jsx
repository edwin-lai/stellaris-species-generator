var React = require('react');
    PropTypes = React.PropTypes,
    PlanetStore = require('../../stores/planet'),
    PlanetData = require('../../constants/planet_data'),
    PlanetInfo = require('./planet_info'),
    PlanetActions = require('../../actions/planet_actions');

var PlanetSelector = React.createClass({
  getInitialState: function () {
    return {currentHighlight: PlanetStore.currentPlanet};
  },

  handleClick: function(planet){
    PlanetActions.recievePlanetUpdate(e.target.id);
  },

  planetItems: function () {
    return Object.keys(PlanetData).map ( function(planet, index) {
      return (
        <img onClick={PlanetSelector.handleClick} id={planet} key={planet} className="planet-pic" src={PlanetData[planet].imageUrl}/>
      );
    });
  },

  render: function() {
    planetItems = this.planetItems();

    return (
      <div className="planets-holder">
        {planetItems}
      </div>
    );
  }
});

module.exports = PlanetSelector;
window.PlanetData = PlanetData;
