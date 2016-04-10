var React = require('react');
var PlanetSelector = require('./planet_selector');

var Planets = React.createClass({

  render: function() {
    return (
      <div className="planets">
        <PlanetSelector />
      </div>
    );
  }

});

module.exports = Planets;
