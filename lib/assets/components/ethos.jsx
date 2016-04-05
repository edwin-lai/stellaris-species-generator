var React = require('react');
var PropTypes = React.PropTypes;
var EthosInfo = require('./ethos_info');
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

  onHover: function (e) {
    console.log(e.target.id);
    var pos = [e.pageX, e.pageY];
    console.log(pos);
  },


  render: function() {
    return (
      <section className="ethos-wrapper">

        <h3 className="ethos-points">Ethic Points Left: {this.state.ethicsPoints}</h3>
        <button className="reset-ethos">Cancel</button>
      </section>
    );
  }

});

module.exports = Ethos;
