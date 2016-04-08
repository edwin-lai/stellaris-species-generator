var Store = require('flux/utils').Store,
    PlanetStore = new Store(AppDispatcher),
    AppDispatcher = require('../dispatcher'),
    PlanetConstants = require('../constants/planet_constants.js'),
    PlanetInfo = require('../constants/planet_info.js');

var _planets = Object.keys(PlanetConstants);
var _currentPlanet = {};

PlanetStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PlanetConstants.UPDATE_PLANET:
      PlanetStore.updatePlanet(payload.planet);
      PlanetStore.__emitChange();
      break;
  }
};

PlanetStore.prototype.all = function () {
  return _planets;
};

PlanetStore.find = function(name) {
  return PlanetConstants[name]
}

module.exports = PlanetStore;
