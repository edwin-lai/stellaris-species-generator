var React = require('react');

var FTLMethod = React.createClass({
  render: function () {
    return (
      <div className="ftl">
        <img src={this.props.imageUrl}/>
        <div>
          <h3>{this.props.name}</h3>
          <h3>{this.props.recommendation}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = FTLMethod;
