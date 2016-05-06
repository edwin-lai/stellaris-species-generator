var AppDispatcher = require('../dispatcher.js');

var SpeciesActions = {
  setSpeciesName: function (speciesName) {
    AppDispatcher.dispatch({
      actionType: 'SET_SPECIES_NAME',
      speciesName: speciesName
    });
  },

  setSpeciesHistory: function (speciesHistory) {
    AppDispatcher.dispatch({
      actionType: 'SET_SPECIES_HISTORY',
      speciesHistory: speciesHistory
    });
  }
};

module.exports = SpeciesActions;
