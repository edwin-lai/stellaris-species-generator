var React = require('react');
var PropTypes = React.PropTypes;
var GovernmentLocks = require('../constants/government_locks');
var GovernmentUnlocks = require('../constants/government_unlocks');
var GovernmentNames = require('../constants/government_names');
var EthosStore = require('../stores/ethos');
var GovernmentStore = require('../stores/government');

var GovernmentItem = React.createClass({
  getInitialState: function () {
    return({
      currentGovernment: GovernmentStore.currentGovernment(),
      currentEthos: EthosStore.all()
    });
  },

  componentDidMount: function () {
    this.ethosListener = EthosStore.addListener(this._ethosChange);
    this.governmentListener = GovernmentStore.addListener(this._governmentChange);
  },

  componentWillUnmount: function () {
    this.ethosListener.remove();
    this.governmentListener.remove();
  },

  _ethosChange: function () {
    this.setState({
      currentEthos: EthosStore.all()
    });
  },

  _governmentChange: function () {
    this.setState({
      currentGovernment: GovernmentStore.currentGovernment(),
    });
  },

  render: function() {
    var government = this.props.government;
    var CSSClass = "government-roundel " + GovernmentNames[government];
    if ( this.state.currentGovernment === government ) {
      CSSClass += " government-selected";
    }
    return (
      <div className={CSSClass} />
    );
  }

});

module.exports = GovernmentItem;
