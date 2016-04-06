var React = require('react');
var PropTypes = React.PropTypes;
var EthosDescriptions = require('../constants/ethos_descriptions');
var EthosModifiers = require('../constants/ethos_modifiers');
var UtilFunctions = require('../util/util_functions');
var EthosEffects = require('./ethos_effects');

var EthosInfo = React.createClass({

  getInitialState: function () {
    return({ ethos: "", pos: [500, 500] });
  },

  componentWillReceiveProps: function () {
    var ethos = this.props.ethos;
    var pos = this.props.pos
    if (ethos) {
      this.setState({ ethos: ethos, pos: pos });
    }
  },

  effects: function () {
    ethos = this.state.ethos;

    if (ethos) {
      return Object.keys(EthosModifiers[ethos]).map (function (effect) {
        return(
          <li className="effect" id="ethos" key={effect}>
            <h5 className="effect-name">{UtilFunctions.textCleaner(effect)}</h5>
            <h5 className="net-effect">{EthosModifiers[ethos][effect]}%</h5>
          </li>
        );
      });
    }
  },

  render: function() {
    var ethosName = UtilFunctions.textCleaner(this.state.ethos);
    var effects = this.effects();

    return (
      <section style={this.props.styling} className="ethos-info">
        <h4 className="ethos-name">{ethosName}</h4>
        <ul>
          {effects}
        </ul>
      </section>
    );
  }

});

module.exports = EthosInfo;
