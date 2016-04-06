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
          <ul className="effect" id="ethos" key="ethos">
            <li className="effect-name">{effect}</li>
            <li className="net-effect">{EthosModifiers[ethos][effect]}</li>
          </ul>
        );
      });
    }
  },

  render: function() {
    var ethosName = UtilFunctions.textCleaner(this.state.ethos);
    var effects = this.effects();

    return (
      <section className="ethos-info">
        <h4 className="ethos-name">{ethosName}</h4>
        {effects}
      </section>
    );
  }

});

module.exports = EthosInfo;
