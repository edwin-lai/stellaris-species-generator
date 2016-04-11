var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher'),
    PlanetStore = new Store(AppDispatcher),

    PlanetConstants = require('../constants/planet_constants'),
    PlanetData = require('../constants/planet_data');

var _currentPlanet = PlanetData["CONTINENTAL"];

var resetPlanet = function(planet){
  _currentPlanet = PlanetData[planet];
  PlanetStore.__emitChange();
}

PlanetStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PlanetConstants.UPDATE_PLANET:
      this.updatePlanet(payload.planet);
      this.__emitChange();
      break;
  }
};

PlanetStore.updatePlanet = function(planet) {
  _currentPlanet = PlanetData[planet];
}

PlanetStore.currentPlanet = function() {
  return _currentPlanet;
}

module.exports = PlanetStore;
window.PlanetStore = PlanetStore;
window.PlanetData = PlanetData;
