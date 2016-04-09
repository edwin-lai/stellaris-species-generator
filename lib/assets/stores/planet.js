var Store = require('flux/utils').Store,
    PlanetStore = new Store(AppDispatcher),
    AppDispatcher = require('../dispatcher'),
    PlanetConstants = require('../constants/planet_constants'),
    PlanetInfo = require('../constants/planet_info');

var _currentPlanet = {};

PlanetStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PlanetConstants.UPDATE_PLANET:
      PlanetStore.updatePlanet(payload.planet);
      PlanetStore.__emitChange();
      break;
  }
};

PlanetStore.updatePlanet = function(name) {
  _currentPlanet = PlanetInfo[name];
};

PlanetStore.currentPlanet = function() {
  return _currentPlanet;
}

module.exports = PlanetStore;
