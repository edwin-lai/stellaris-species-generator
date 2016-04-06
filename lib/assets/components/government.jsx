var React = require('react');
var PropTypes = React.PropTypes;
var Ethos = require('./ethos');
var GovernmentWrapper = require('./government_wrapper');

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
