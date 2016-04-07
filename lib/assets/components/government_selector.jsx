var React = require('react');
var PropTypes = React.PropTypes;
var GovernmentNames = require('../constants/government_names');
var GovernmentItem = require('./government_item');

var GovernmentSelector = React.createClass({

  governmentItems: function() {
    return Object.keys(GovernmentNames).map ( function(government) {
      return <GovernmentItem government={government} key={government} />
    });
  },

  render: function() {
    var governmentItems = this.governmentItems();
    return (
      <section className="government-selector">
        {governmentItems}
      </section>
    );
  }

});

module.exports = GovernmentSelector;
