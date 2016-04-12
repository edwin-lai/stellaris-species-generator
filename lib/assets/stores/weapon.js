var Store = require('flux/utils').Store,
    WeaponStore = new Store(AppDispatcher),
    AppDispatcher = require('../dispatcher');

var projectileWeapons = {
  name: "Projectile Weapons",
  description:
    `Mass Drivers that use electromagnetic catapults to accelerate
    projectiles towards targets at blinding speeds. Highly destructive, their
    range is somewhat limited.`,
  imageUrl: ""
},
missileWeapons = {
  name: "Projectile Weapons",
  description:
    `Space-to-space missiles armed with nuclear warheads. Missiles
    have excellent range, but they are vulnerable to interception by point-defense
    systems.`,
  imageUrl: ""
},
energyWeapons = {
  name: "Energy Weapons",
  description:
    `These directed-energy weapons emit focused laser beams at their targets. They
    are effective at medium to close ranges.`,
  imageUrl: ""
};

var _weapons = [projectileWeapons, missileWeapons, energyWeapons];

WeaponStore.prototype.all = function () {
  return _weapons.slice();
};

module.exports = WeaponStore;
