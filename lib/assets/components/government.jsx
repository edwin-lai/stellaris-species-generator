var React = require('react');
var PropTypes = React.PropTypes;
var Ethos = require('./ethos');

var Government = React.createClass({

  render: function() {
    return (
      <div className="government">
        <Ethos />
      </div>
    );
  }

});

module.exports = Government;
