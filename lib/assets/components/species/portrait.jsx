var React = require('react');
var SpeciesActions = require('../../actions/species_actions.js');

var Portrait = React.createClass({
  handleClick: function () {
    SpeciesActions.setPortrait(this.props.url);
  },

  render: function () {
    return <img className='portrait' src={this.props.url} onClick={this.handleClick}/>;
  }
});

module.exports = Portrait;
