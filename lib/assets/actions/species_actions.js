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
  },

  setEmpire: function (empire) {
    AppDispatcher.dispatch({
      actionType: 'SET_EMPIRE',
      empire: empire
    });
  },

  setPortrait: function (img) {
    AppDispatcher.dispatch({
      actionType: 'SET_PORTRAIT',
      portrait: img
    });
  }
};

module.exports = SpeciesActions;
