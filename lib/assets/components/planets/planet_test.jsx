var React = require('react');
    PropTypes = React.PropTypes,
    PlanetStore = require('../../stores/planet'),
    PlanetData = require('../../constants/planet_data'),
    PlanetActions = require('../../actions/planet_actions');

var PlanetSelector = React.createClass({
  getInitialState: function () {
    return {currentHighlight: PlanetStore.currentPlanet};
  },

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
    return Object.keys(PlanetData).map ( function(planet, index) {
      debugger;
      if (PlanetStore.currentPlanet().name.toUpperCase() === planet){
        return(
          <img id={planet} key={planet} className="planet-pic planet-highlight" src={PlanetData[planet].imageUrl}/>
        )
      } else {
        return (
          <img onClick={PlanetSelector.handleClick} id={planet} key={planet} className="planet-pic" src={PlanetData[planet].imageUrl}/>
        );
      }
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
