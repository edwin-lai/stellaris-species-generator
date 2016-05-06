var React = require('react');
var FTLActions = require('../../actions/ftl_actions.js');

var FTLMethod = React.createClass({
  getInitialState: function () {
    return {selected: FTLActions.getFTL() === this.props.name};
  },

  class: function () {
    return this.state.selected ? "ftl selected" : "ftl";
  },

  handleClick: function () {
    FTLActions.setFTL(this.props.name);
    this.setState({selected: true});
  },

  render: function () {
    return (
      <div className={this.class()} onClick={this.handleClick}>
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
