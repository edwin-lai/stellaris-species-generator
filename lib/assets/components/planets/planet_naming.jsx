var React = require('react');
var PlanetStore = require('../../stores/planet.js');
var PlanetActions = require('../../actions/planet_actions.js');

var PlanetNaming = React.createClass({
  getInitialState: function () {
    return {
      homeworld: PlanetStore.getHomeworld(),
      star: PlanetStore.getStar()
    };
  },

  setHomeworld: function (event) {
    PlanetActions.setHomeworld(event.target.value);
    this.setState({homeworld: event.target.value});
  },

  setStar: function (event) {
    PlanetActions.setStar(event.target.value);
    this.setState({star: event.target.value});
  },

  render: function() {
    return <div className='planet-naming'>
      <h1>Planet Class</h1>
      <hr />
      <label htmlFor='planet-name'>Homeworld Name</label>
      <br />
      <input
        id='planet-name'
        value={this.state.homeworld}
        onChange={this.setHomeworld}/>
      <br />
      <label htmlFor='star-system'>Star Name</label>
      <br />
      <input
        id='star-system'
        value={this.state.star}
        onChange={this.setStar}/>
    </div>;
  }
});

module.exports = PlanetNaming;
