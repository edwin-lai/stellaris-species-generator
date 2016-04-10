var AppDispatcher = require('../dispatcher'),
    PlanetConstants = require('../constants/planet_constants.js'),
    PlanetActions = {};

PlanetActions.recievePlanetUpdate = function(planet) {
  AppDispatcher.dispatch({
    actionType: PlanetConstants.UPDATE_PLANET,
    planet: planet
  });
};

module.exports = PlanetActions;
