var React = require('react');
    PlanetStore = require('../stores/planet'),
    planet_info = require('../../constants/planet_info');

var PlanetSelector = React.createClass({
  var currentHighlight = 1;
  highLight: function(){

  },

  planetItems: function () {
    return Object.keys(PlanetConstants).map ( function(planet, index) {
      return (
        <div id=("planet-" + {index}) key={planet.name} className="planet-container" onClick={this.highLight}>
          <img src={planet.imageUrl}/>
        </div>
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
