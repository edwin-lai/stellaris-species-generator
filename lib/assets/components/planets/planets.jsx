var React = require('react');
var PlanetSelector = require('./planet_selector'),
    PlanetInfo = require('./planet_info');

var Planets = React.createClass({

  render: function() {
    return (
      <div className="planets">
        <PlanetSelector />
        <PlanetInfo />
      </div>
    );
  }
});

module.exports = Planets;
