var AppDispatcher = require('../dispatcher/dispatcher'),
    ApiActions = {};

ApiActions.recievePlanetUpdate = function(planet) {
  AppDispatcher.dispatch({
    actionType: "UPDATE_PLANET",
    planet: planet
  });
};
