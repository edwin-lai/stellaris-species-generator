var React = require('react');
var WeaponActions = require('../../actions/weapon_actions.js');

var Weapon = React.createClass({
  handleClick: function () {
    WeaponActions.setWeapon(this.props.name);
  },

  render: function () {
    return (
      <div className="weapon" onClick={this.handleClick}>
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
