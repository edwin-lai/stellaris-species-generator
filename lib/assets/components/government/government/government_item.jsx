var React = require('react');
var GovernmentLocks = require('../../../constants/government/government/government_locks');
var GovernmentUnlocks = require('../../../constants/government/government/government_unlocks');
var GovernmentNames = require('../../../constants/government/government/government_names');
var EthosStore = require('../../../stores/ethos');
var GovernmentStore = require('../../../stores/government');
var GovernmentActions = require('../../../actions/government/government_actions');

window.GovernmentStore = GovernmentStore;

var GovernmentItem = React.createClass({
  getInitialState: function () {
    return({
      currentGovernment: GovernmentStore.currentGovernment(),
      unlocked: false
    });
  },

  componentWillReceiveProps: function () {
    var unlocked = this.props.unlocked;
    if (unlocked) {
      this.setState({ unlocked: unlocked });
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
    if (this.props.unlocked) {
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
