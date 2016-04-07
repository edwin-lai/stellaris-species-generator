var React = require('react');
var PropTypes = React.PropTypes;
var GovernmentLocks = require('../constants/government_locks');
var GovernmentUnlocks = require('../constants/government_unlocks');
var GovernmentNames = require('../constants/government_names');
var EthosStore = require('../stores/ethos');
var GovernmentStore = require('../stores/government');
var GovernmentActions = require('../actions/government_actions');

window.GovernmentStore = GovernmentStore;

var GovernmentItem = React.createClass({
  getInitialState: function () {
    return({
      currentGovernment: GovernmentStore.currentGovernment(),
      availableGovernments: [
        'indirect_democracy',
        'plutocratic_oligarchy',
        'despotic_empire'
      ]
    });
  },

  componentWillReceiveProps: function () {
    var availableGovernments = this.props.availableGovernments;
    if (availableGovernments) {
      this.setState({ availableGovernments: availableGovernments });
    }
  },

  componentDidMount: function () {
    this.governmentListener = GovernmentStore.addListener(this._governmentChange);
  },

  componentWillUnmount: function () {
    this.governmentListener.remove();
  },

  _governmentChange: function () {
    this.setState({
      currentGovernment: GovernmentStore.currentGovernment(),
    });
  },

  onClick: function(e) {
    var government = e.target.id;
    if (this.state.availableGovernments.includes(government)) {
      GovernmentActions.updateGovernment(government);
    }
  },

  render: function() {
    var government = this.props.government;
    var unlocked = this.props.unlocked;
    var CSSClass = "government-roundel " + GovernmentNames[government];
    if ( this.state.currentGovernment === government ) {
      CSSClass += " government-selected";
    }
    if (!unlocked) {
      CSSClass += " locked";
    }

    return (
      <div onClick={this.onClick} className={CSSClass} id={government} />
    );
  }

});

module.exports = GovernmentItem;
