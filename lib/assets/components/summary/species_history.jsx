var React = require('react');
var SpeciesStore = require('../../stores/species.js');

var SpeciesHistory = React.createClass({
  render: function () {
    return <div className='summary-history'>
      History
      <hr />
      {SpeciesStore.getHistory()}
    </div>;
  }
});

module.exports = SpeciesHistory;
