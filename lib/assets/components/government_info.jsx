var React = require('react');
var PropTypes = React.PropTypes;
var GovernmentStore = require('../stores/government');
var GovernmentDescriptions = require('../constants/government_descriptions');
var GovernmentModifiers = require('../constants/government_modifiers');
var UtilFunctions = require('../util/util_functions');
window.GovernmentModifiers = GovernmentModifiers;

var GovernmentInfo = React.createClass({
  getInitialState: function () {
    return ({
      currentGovernment: GovernmentStore.currentGovernment()
    });
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

  effects: function () {
    var government = this.state.currentGovernment;

    if (government) {
      return Object.keys(GovernmentModifiers[government]).map (function (effect) {
        if (/^txt/.test(effect)) {
          return(
            <li className="effect" id="government" key={effect}>
              <p className="text-effect">{GovernmentModifiers[government][effect]}</p>
            </li>
          );
        } else {
          var netEffect = GovernmentModifiers[government][effect][0]
          var effectSymbol;

          if (GovernmentModifiers[government][effect][1] === 1) {
            effectSymbol = ".0%"
          } else {
            effectSymbol = ""
          }

          return(
            <li className="effect" id="government" key={effect}>
              <h5 className="effect-name">{UtilFunctions.textCleaner(effect)}:</h5>
              <h5 className="net-effect">{netEffect}{effectSymbol}</h5>
            </li>
          );
        }
      });
    }
  },

  render: function() {
    var government = this.state.currentGovernment;
    var effects = this.effects();

    return (
      <section className="government-info">
        <h3 className="government-name">{UtilFunctions.textCleaner(government)}</h3>
        <p className="government-description">{GovernmentDescriptions[government]}</p>
        <ul>
          {effects}
        </ul>
      </section>
    );
  }

});

module.exports = GovernmentInfo;
