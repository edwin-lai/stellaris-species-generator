var React = require('react');
    PropTypes = React.PropTypes,
    PlanetStore = require('../../stores/planet'),
    PlanetData = require('../../constants/planet_data'),
    PlanetItem = require('./planet_item');

var PlanetSelector = React.createClass({
  planetItems: function () {
    return Object.keys(PlanetData).map ( function(planet) {
      return <PlanetItem planet={planet} key={planet} />
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
