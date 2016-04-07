var React = require('react');
var Underscore = require('underscore');
var PropTypes = React.PropTypes;
var GovernmentNames = require('../constants/government_names');
var GovernmentItem = require('./government_item');
var EthosStore = require('../stores/ethos');
var GovernmentStore = require('../stores/government');
var GovernmentLocks = require('../constants/government_locks');
var GovernmentUnlocks = require('../constants/government_unlocks');

var GovernmentSelector = React.createClass({
  getInitialState: function () {
    return({
      availableGovernments: this.availableGovernments()
    });
  },

  componentDidMount: function () {
    this.ethosListener = EthosStore.addListener(this._ethosChange);
  },

  componentWillUnmount: function () {
    this.ethosListener.remove();
  },

  _ethosChange: function () {
    this.setState({
      availableGovernments: this.availableGovernments()
    });
  },

  availableGovernments: function () {
    var ethos = EthosStore.all();
    ethos.push("always");
    var availableGovernments = []

    ethos.forEach (function (ethic) {
      ethic = ethic.replace(/fanatic_/, "");
      availableGovernments = availableGovernments.concat(GovernmentUnlocks[ethic]);
    });

    ethos.forEach (function (ethic) {
      var ethicLocks = GovernmentLocks[ethic]
      if (ethicLocks) {
        ethicLocks.forEach (function (unGov) {
          var idx = availableGovernments.indexOf(unGov);
          if (idx !== -1) {
            availableGovernments = availableGovernments.splice(idx, 1);
          }
        });
      }
    });

    return availableGovernments;
  },

  governmentItems: function() {
    var availableGovernments = this.state.availableGovernments
    return Object.keys(GovernmentNames).map ( function(government) {
      var unlocked;
      availableGovernments.includes(government) ? unlocked = true : unlocked = false
      return <GovernmentItem government={government} unlocked={unlocked} key={government} />
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
