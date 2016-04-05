var React = require('react');
var PropTypes = React.PropTypes;
var EthosSelector = require('./ethos_selector');
var EthosStore = require('../stores/ethos');
window.EthosStore = EthosStore;

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

  render: function() {
    return (
      <section className="ethos-wrapper">
        <EthosSelector />
        <h3 className="ethos-points">Ethic Points Left: {this.state.ethicsPoints}</h3>
        <button className="reset-ethos">Cancel</button>
      </section>
    );
  }

});

module.exports = Ethos;
