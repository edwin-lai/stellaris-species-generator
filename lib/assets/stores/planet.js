var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher'),
    PlanetStore = new Store(AppDispatcher),

    PlanetConstants = require('../constants/planet_constants'),
    PlanetData = require('../constants/planet_data'),
    Util = require('../util/util_functions.js');

var _currentPlanet = "CONTINENTAL";
var _homeworld, _star;

PlanetStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PlanetConstants.UPDATE_PLANET:
      this.updatePlanet(payload.planet);
      this.__emitChange();
      break;
    case PlanetConstants.SET_HOMEWORLD:
      this.setHomeworld(payload.homeworld);
      this.__emitChange();
      break;
    case PlanetConstants.SET_STAR:
      this.setStar(payload.star);
      this.__emitChange();
      break;
  }
};

PlanetStore.setHomeworld = function (homeworld) {
  if (Util.localStorageAvailable()) {
    localStorage.homeworld = homeworld;
  } else {
    _homeworld = homeworld;
  }
};

PlanetStore.setStar = function (star) {
  if (Util.localStorageAvailable()) {
    localStorage.star = star;
  } else {
    _star = star;
  }
};

PlanetStore.updatePlanet = function(planet) {
  if (Util.localStorageAvailable()) {
    localStorage.currentPlanet = planet;
  } else {
    _currentPlanet = planet;
  }
};

PlanetStore.currentPlanet = function() {
  if (Util.localStorageAvailable() && localStorage.currentPlanet) {
    return PlanetData[localStorage.currentPlanet];
  } else {
    return PlanetData[_currentPlanet];
  }
};

PlanetStore.getHomeworld = function () {
  if (Util.localStorageAvailable() && localStorage.homeworld) {
    return localStorage.homeworld;
  } else {
    return _homeworld;
  }
};

PlanetStore.getStar = function () {
  if (Util.localStorageAvailable() && localStorage.star) {
    return localStorage.star;
  } else {
    return _star;
  }
};

module.exports = PlanetStore;
window.PlanetStore = PlanetStore;
window.PlanetData = PlanetData;
