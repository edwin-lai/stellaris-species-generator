var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher'),
    PlanetStore = new Store(AppDispatcher),

    PlanetConstants = require('../constants/planet_constants'),
    PlanetData = require('../constants/planet_data');

var _currentPlanet = PlanetData["CONTINENTAL"];
var _homeworld, _star;

PlanetStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PlanetConstants.UPDATE_PLANET:
      this.updatePlanet(payload.planet);
      this.__emitChange();
      break;
    case PlanetConstants.SET_HOMEWORLD:
      _homeworld = payload.homeworld;
      this.__emitChange();
      break;
    case PlanetConstants.SET_STAR:
      _star = payload.star;
      this.__emitChange();
      break;
  }
};

PlanetStore.updatePlanet = function(planet) {
  _currentPlanet = PlanetData[planet];
};

PlanetStore.currentPlanet = function() {
  return _currentPlanet;
};

PlanetStore.getHomeworld = function () {
  return _homeworld;
};

PlanetStore.getStar = function () {
  return _star;
};

module.exports = PlanetStore;
window.PlanetStore = PlanetStore;
window.PlanetData = PlanetData;
