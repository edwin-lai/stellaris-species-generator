var React = require('react');
var PropTypes = React.PropTypes;
var PlanetData = require('../../constants/planet_data');
var PlanetStore = require('../../stores/planet');
var PlanetActions = require('../../actions/planet_actions');

var PlanetItem = React.createClass({
  getInitialState: function () {
    return{
      currentPlanet: PlanetStore.currentPlanet()
    };
  },

  componentDidMount: function () {
    this.PlanetListener = PlanetStore.addListener(this._PlanetChange);
  },

  componentWillUnmount: function () {
    this.PlanetListener.remove();
  },

  _PlanetChange: function () {
    this.setState({
      currentPlanet: PlanetStore.currentPlanet(),
    });
  },

  handleClick: function(e) {
    var planet = e.target.id;
    PlanetActions.recievePlanetUpdate(planet);
  },

  render: function() {
    var planet = this.props.planet;
    if (this.state.currentPlanet.name.toUpperCase() === planet){
      return(
        <img id={planet} key={planet} className="planet-pic planet-highlight" src={PlanetData[planet].imageUrl}/>
      )
    } else {
      return (
        <img onClick={this.handleClick} id={planet} key={planet} className="planet-pic" src={PlanetData[planet].imageUrl}/>
      );
    }
  }

});

module.exports = PlanetItem;
