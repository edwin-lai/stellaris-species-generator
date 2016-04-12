var React = require('react');
var Ethos = require('./ethos/ethos');
var GovernmentWrapper = require('./government/government_wrapper');

var Government = React.createClass({

  render: function() {
    return (
      <div className="government">
        <Ethos />
        <GovernmentWrapper />
      </div>
    );
  }

});

module.exports = Government;
