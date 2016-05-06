var AppDispatcher = require('../dispatcher'),
    PlanetConstants = require('../constants/planet_constants.js'),
    PlanetActions = {};

PlanetActions.recievePlanetUpdate = function(planet) {
  AppDispatcher.dispatch({
    actionType: PlanetConstants.UPDATE_PLANET,
    planet: planet
  });
};

PlanetActions.setHomeworld = function (homeworld) {
  AppDispatcher.dispatch({
    actionType: PlanetConstants.SET_HOMEWORLD,
    homeworld: homeworld
  });
};

PlanetActions.setStar = function (star) {
  AppDispatcher.dispatch({
    actionType: PlanetConstants.SET_STAR,
    star: star
  });
};

module.exports = PlanetActions;
