var React = require('react');

var PlanetNaming = React.createClass({

  render: function() {
    return <div className='planet-naming'>
      <h1>Planet Class</h1>
      <hr />
      <label htmlFor='planet-name'>Homeworld Name</label>
      <br />
      <input id='planet-name' />
      <br />
      <label htmlFor='star-system'>Star Name</label>
      <br />
      <input id='star-system' />
    </div>;
  }
});

module.exports = PlanetNaming;
