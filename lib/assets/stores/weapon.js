var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher'),
    WeaponStore = new Store(AppDispatcher);

var projectileWeapons = {
  name: "Projectile Weapons",
  description:
    `Mass Drivers that use electromagnetic catapults to accelerate
    projectiles towards targets at blinding speeds. Highly destructive, their
    range is somewhat limited.`,
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461886377/projectile_yzvajb.png"
},
missileWeapons = {
  name: "Missile Weapons",
  description:
    `Space-to-space missiles armed with nuclear warheads. Missiles
    have excellent range, but they are vulnerable to interception by point-defense
    systems.`,
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461877239/missile_jvft4c.png"
},
energyWeapons = {
  name: "Energy Weapons",
  description:
    `These directed-energy weapons emit focused laser beams at their targets. They
    are effective at medium to close ranges.`,
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461886214/energy_mzezcw.png"
};

var _weapons = [projectileWeapons, missileWeapons, energyWeapons];

WeaponStore.all = function () {
  return _weapons.slice();
};

module.exports = WeaponStore;
