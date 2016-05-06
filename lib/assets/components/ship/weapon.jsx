var React = require('react');

var Weapon = React.createClass({
  class: function () {
    return this.props.selected ? "weapon selected" : "weapon";
  },

  handleClick: function () {
    this.props.setCurrentWeapon(this.props.name);
  },

  render: function () {
    return (
      <div className={this.class()} onClick={this.handleClick}>
        <a href="#/weapons">
          <img src={this.props.imageUrl}/>
          <div>
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
          </div>
        </a>
      </div>
    );
  }
});

module.exports = Weapon;
