var React = require('react');
var EthosDescriptions = require('../../../constants/government/ethos/ethos_descriptions');
var EthosModifiers = require('../../../constants/government/ethos/ethos_modifiers');
var UtilFunctions = require('../../../util/util_functions');

var EthosInfo = React.createClass({

  getInitialState: function () {
    return({ ethos: this.props.ethos, pos: [500, 500] });
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
            <h5 className="effect-name">{UtilFunctions.textCleaner(effect)}:</h5>
            <h5 className="net-effect">{EthosModifiers[ethos][effect]}.0%</h5>
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
        <section className="ethos-padding">
          <h4 className="ethos-name">{ethosName}</h4>
          <ul>
            {effects}
          </ul>
          <hr className="ethos-divider" />
          <p>{EthosDescriptions[ethos]}</p>
        </section>
      </section>
    );
  }

});

module.exports = EthosInfo;
