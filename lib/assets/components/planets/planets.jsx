var React = require('react');
var PlanetSelector = require('./planet_selector'),
    PlanetInfo = require('./planet_info'),
    PlanetNaming = require('./planet_naming');

var Planets = React.createClass({

  render: function() {
    return (
      <div className="planets">
        <PlanetNaming />
        <PlanetSelector />
        <PlanetInfo />
      </div>
    );
  }
});

module.exports = Planets;
