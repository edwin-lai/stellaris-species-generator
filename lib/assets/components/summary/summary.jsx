var React = require('react');
var Species = require('./species.jsx');
var SpeciesHistory = require('./species_history.jsx');
var Ships = require('./ships.jsx');
var Homeworld = require('./homeworld.jsx');
var Government = require('./government.jsx');

var Summary = React.createClass({
  render: function () {
    return <div className='summary'>
      <div className='summary-left'>
        <Government />
        <Species />
      </div>
      <Homeworld />
      <div className='summary-right'>
        <Ships />
        <SpeciesHistory />
      </div>
    </div>;
  }
});

module.exports = Summary;
