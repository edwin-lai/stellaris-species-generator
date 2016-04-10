var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher'),
    PlanetStore = new Store(AppDispatcher),

    PlanetConstants = require('../constants/planet_constants'),
    PlanetData = require('../constants/planet_data');

var _currentPlanet = PlanetData["CONTINENTAL"];

PlanetStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PlanetConstants.UPDATE_PLANET:
      PlanetStore.updatePlanet(payload.planet);
      PlanetStore.__emitChange();
      break;
  }
};

PlanetStore.updatePlanet = function(name) {
  _currentPlanet = PlanetData[name];
};

PlanetStore.currentPlanet = function() {
  return _currentPlanet;
}

module.exports = PlanetStore;
window.PlanetStore = PlanetStore;
window.PlanetData = PlanetData;
