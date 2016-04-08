var Store = require('flux/utils').Store,
    PlanetStore = new Store(AppDispatcher),
    AppDispatcher = require('../dispatcher'),
    PlanetInfo = require('../constants/planet_info.js');

var _planets = Object.keys(PlanetConstants);
var _currentPlanet = {};

PlanetStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "UPDATE_PLANET":
      PlanetStore.updatePlanet(payload.planet);
      PlanetStore.__emitChange();
      break;
  }
};

PlanetStore.prototype.all = function () {
  return _planets;
};

PlanetStore.updatePlanet = function(name) {
  _currentPlanet = PlanetConstants[name];
};

PlanetStore.currentPlanet = function() {
  return _currentPlanet;
}

module.exports = PlanetStore;
