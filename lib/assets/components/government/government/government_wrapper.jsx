var React = require('react');
var PropTypes = React.PropTypes;
var GovernmentSelector = require('./government_selector');
var GovernmentInfo = require('./government_info');

var GovernmentWrapper = React.createClass({

  render: function() {
    return (
      <section className="government-wrapper">
        <GovernmentInfo />
        <GovernmentSelector />
      </section>
    );
  }

});

module.exports = GovernmentWrapper;
