var React = require('react');

var FTLMethod = React.createClass({
  class: function () {
    return this.props.selected ? "ftl selected" : "ftl";
  },

  handleClick: function () {
    this.props.setCurrentFTL(this.props.name);
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
