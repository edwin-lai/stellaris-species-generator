var React = require('react');

var FTLMethod = React.createClass({
  render: function () {
    return (
      <div className="ftl">
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
