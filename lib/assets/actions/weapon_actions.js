var AppDispatcher = require('../dispatcher');

var WeaponActions = {
  setWeapon: function (weapon) {
    AppDispatcher.dispatch({
      actionType: 'SET_WEAPON',
      weapon: weapon
    });
  }
};

module.exports = WeaponActions;
