var React = require('react');
var GovernmentRequirements = require('../../../constants/government/government/government_requirements');
var UtilFunctions = require('../../../util/util_functions');

var GovernmentHover = React.createClass({

  getInitialState: function () {
    return({ government: "", pos: [500, 500] });
  },

  componentWillReceiveProps: function () {
    var government = this.props.government;
    var pos = this.props.pos
    if (government) {
      this.setState({ government: government, pos: pos });
    }
  },

  requirements: function () {
    government = this.state.government;

    if (government) {
      requirements = GovernmentRequirements[government].requires;
      prohibitations = GovernmentRequirements[government].prohibits.join(', ');
      return(
        <li className="criteria" id="government" key={government}>
          <h5 className="criteria-name">Requires:</h5>
          <p className="criteria">{requirements}</p>
          <h5 className="criteria-name">Prohibits:</h5>
          <p className="criteria">{prohibitations}</p>
        </li>
      );
    }
  },

  render: function() {
    var governmentName = UtilFunctions.textCleaner(this.state.government);
    var requirements = this.requirements();

    return (
      <section style={this.props.styling} className="government-hover">
        <section className="government-padding">
          <h4 className="government-name">{governmentName}</h4>
          <ul>
            {requirements}
          </ul>
        </section>
      </section>
    );
  }

});

module.exports = GovernmentHover;
