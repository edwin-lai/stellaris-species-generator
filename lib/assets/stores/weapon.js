var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher'),
    WeaponStore = new Store(AppDispatcher),
    Util = require('../util/util_functions.js');

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

var _currentWeapon = 'Missile Weapons';

var _weaponMap = {
  'Projectile Weapons': projectileWeapons,
  'Missile Weapons': missileWeapons,
  'Energy Weapons': energyWeapons
};

WeaponStore.all = function () {
  return _weapons.slice();
};

WeaponStore.currentWeapon = function () {
  if (Util.localStorageAvailable && localStorage.currentWeapon) {
    return localStorage.currentWeapon;
  } else {
    return _currentWeapon;
  }
};

WeaponStore.currentWeaponImg = function () {
  var currentWeapon;
  if (Util.localStorageAvailable && localStorage.currentWeapon) {
    currentWeapon = localStorage.currentWeapon;
  } else {
    currentWeapon = _currentWeapon;
  }
  if (currentWeapon) {
    return _weaponMap[currentWeapon].imageUrl;
  }
};

WeaponStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'SET_WEAPON':
      this.setFTL(payload.weapon);
      break;
  }
};

WeaponStore.setFTL = function (weapon) {
  if (Util.localStorageAvailable) {
    localStorage.currentWeapon = weapon;
  } else {
    _currentWeapon = weapon;
  }
};


module.exports = WeaponStore;
