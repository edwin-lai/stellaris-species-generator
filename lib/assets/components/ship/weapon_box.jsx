var React = require('react'),
    Weapon = require('./weapon');

var WeaponBox = React.createClass({
  getWeapons: function () {
    var weapons = WeaponStore.all().map(function (weapon, i) {
      return (
        <Weapon
          key={i}
          name={weapon.name}
          description={weapon.description}
          imageUrl={weapon.imageUrl}/>
      );
    });

    return weapons;
  },
  render: function () {
    return (
      <div className="weapon-box">
        {this.getWeapons()}
      </div>
    )
  }
});

module.exports = WeaponBox;
