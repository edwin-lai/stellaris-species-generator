var React = require('react');
var WeaponActions = require('../../actions/weapon_actions.js');

var Weapon = React.createClass({
  getInitialState: function () {
    return {selected: WeaponActions.getWeapon() === this.props.name};
  },

  class: function () {
    return this.state.selected ? "weapon selected" : "weapon";
  },

  handleClick: function () {
    WeaponActions.setWeapon(this.props.name);
    this.setState({selected: true});
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
