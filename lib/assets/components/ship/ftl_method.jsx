var React = require('react');
var FTLActions = require('../../actions/ftl_actions.js');

var FTLMethod = React.createClass({
  handleClick: function () {
    FTLActions.setFTL(this.props.name);
  },

  render: function () {
    return (
      <div className="ftl" onClick={this.handleClick}>
        <a href="#/ftlMethods">
          <img src={this.props.imageUrl}/>
          <div>
            <h3>{this.props.name}</h3>
            <h3 className="recommendation">{this.props.recommendation}</h3>
            <p>{this.props.description}</p>
          </div>
        </a>
      </div>
    );
  }
});

module.exports = FTLMethod;
