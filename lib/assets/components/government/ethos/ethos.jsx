var React = require('react');
var EthosSelector = require('./ethos_selector');
var EthosStore = require('../../../stores/ethos');
var EthosActions = require('../../../actions/government/ethos_actions');
var GovernmentActions = require('../../../actions/government/government_actions');

var Ethos = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return({ ethicsPoints: EthosStore.points() });
  },

  _onChange: function () {
    this.setState({ ethicsPoints: EthosStore.points() });
  },

  componentDidMount: function () {
    this.ethosListener = EthosStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.ethosListener.remove();
  },

  onClick: function () {
    EthosActions.resetEthos();
    GovernmentActions.resetGovernment();
  },

  render: function() {
    return (
      <section className="ethos-wrapper">
        <EthosSelector />
        <h3 className="ethos-points">Ethic Points Left: {this.state.ethicsPoints}</h3>
        <div onClick={this.onClick} className="reset-ethos">Reset</div>
      </section>
    );
  }

});

module.exports = Ethos;
