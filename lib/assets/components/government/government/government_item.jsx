var React = require('react');
var GovernmentHover = require('./government_hover');
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
      pos: [-2000, -2000],
      currentGovernment: GovernmentStore.currentGovernment(),
      government: this.props.government,
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

  onHover: function (e) {
    e.target.style.zIndex = 1;
    var government = e.target.id;
    var pos = [43, 43];
    this.setState({
      government: government,
      pos: pos
    });
  },

  onLeave: function (e) {
    e.target.style.zIndex = 0;
    this.setState({
      pos: [-2000, -2000]
    });
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

    var top = this.state.pos[1];
    var left = this.state.pos[0];

    var divStyle = {
      top: top,
      left: left
    };

    return (
      <div>
        <div onMouseOver={this.onHover}
          onMouseOut={this.onLeave}
          onClick={this.onClick}
          className={CSSClass}
          id={government}>
          <GovernmentHover
            styling={divStyle}
            government={this.state.government}
            pos={this.state.pos} />
        </div>
      </div>
    );
  }

});

module.exports = GovernmentItem;
