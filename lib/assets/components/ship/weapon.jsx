var React = require('react');

var Weapon = React.createClass({
  render: function () {
    return (
      <div className="weapon">
        <img src={this.props.imageUrl}/>
        <div>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
});

module.exports = Weapon;
