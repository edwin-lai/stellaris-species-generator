var React = require('react');
var SpeciesStore = require('../../stores/species.js');

var SpeciesHistory = React.createClass({
  render: function () {
    return <div className='summary-history'>
      History
      <hr />
      <div className='history-text'>
        {SpeciesStore.getHistory()}
      </div>
    </div>;
  }
});

module.exports = SpeciesHistory;
