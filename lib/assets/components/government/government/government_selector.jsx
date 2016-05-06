var React = require('react');
var GovernmentNames = require('../../../constants/government/government/government_names');
var GovernmentItem = require('./government_item');
var EthosStore = require('../../../stores/ethos');
var GovernmentStore = require('../../../stores/government');
var GovernmentLocks = require('../../../constants/government/government/government_locks');
var GovernmentUnlocks = require('../../../constants/government/government/government_unlocks');
var GovernmentActions = require('../../../actions/government/government_actions');

var GovernmentSelector = React.createClass({
  getInitialState: function () {
    return({
      availableGovernments: this.availableGovernments(),
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
    var availableGovernments = [];

    ethos.forEach (function (ethic) {
      ethic = ethic.replace(/fanatic_/, "");
      availableGovernments = availableGovernments.concat(GovernmentUnlocks[ethic]);
    });

    ethos.forEach (function (ethic) {
      var ethicLocks = GovernmentLocks[ethic];
      if (ethicLocks) {
        ethicLocks.forEach (function (unGov) {
          var idx = availableGovernments.indexOf(unGov);
          if (idx !== -1) {
            availableGovernments.splice(idx, 1);
          }
        });
      }
    });

    return availableGovernments;
  },

  governmentItems: function() {
    var availableGovernments = new Set();
    for (var govt of this.state.availableGovernments) {
      availableGovernments.add(govt);
    }
    return Object.keys(GovernmentNames).map ( function(government) {
      var unlocked;
      unlocked = availableGovernments.has(government);
      return <GovernmentItem government={government} unlocked={unlocked} key={government} />;
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
