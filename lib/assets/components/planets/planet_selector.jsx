var React = require('react');
    PropTypes = React.PropTypes,
    PlanetStore = require('../../stores/planet'),
    PlanetData = require('../../constants/planet_data'),
    PlanetItem = require('./planet_item');

var PlanetSelector = React.createClass({
  componentDidMount: function () {
    this.planetListener = PlanetStore.addListener(this._planetChange);
  },

  componentWillUnmount: function () {
    this.planetListener.remove();
  },

  handleClick: function(){
    PlanetActions.recievePlanetUpdate(e.target.id);
  },

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
window.PlanetData = PlanetData;
