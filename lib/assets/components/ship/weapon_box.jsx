var React = require('react'),
    WeaponStore = require('../../stores/weapon'),
    WeaponActions = require('../../actions/weapon_actions.js'),
    Weapon = require('./weapon');

var WeaponBox = React.createClass({
  getInitialState: function () {
    return {selected: WeaponStore.currentWeapon()};
  },

  setCurrentWeapon: function (weaponName) {
    WeaponActions.setWeapon(weaponName);
    this.setState({selected: weaponName});
  },

  getWeapons: function () {
    var that = this;
    var weapons = WeaponStore.all().map(function (weapon, i) {
      return (
        <Weapon
          key={i}
          name={weapon.name}
          description={weapon.description}
          imageUrl={weapon.imageUrl}
          selected={that.state.selected === weapon.name}
          setCurrentWeapon={that.setCurrentWeapon}/>
      );
    });

    return weapons;
  },

  render: function () {
    return (
      <div className="weapon-box">
        {this.getWeapons()}
      </div>
    );
  }
});

module.exports = WeaponBox;
