var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var Util = require('../util/util_functions.js');

var _name, _history, _empire;

var SpeciesStore = new Store(AppDispatcher);

SpeciesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'SET_SPECIES_NAME':
      if (Util.localStorageAvailable) {
        localStorage.speciesName = payload.speciesName;
      } else {
        _name = payload.speciesName;
      }
      SpeciesStore.__emitChange();
      break;
    case 'SET_SPECIES_HISTORY':
      if (Util.localStorageAvailable) {
        localStorage.speciesHistory = payload.speciesHistory;
      } else {
        _history = payload.speciesHistory;
      }
      SpeciesStore.__emitChange();
      break;
    case 'SET_EMPIRE':
      if (Util.localStorageAvailable) {
        localStorage.empire = payload.empire;
      } else {
        _empire = payload.empire;
      }
      SpeciesStore.__emitChange();
      break;
  }
};

SpeciesStore.getName = function () {
  return localStorage.speciesName ? localStorage.speciesName : _name;
};

SpeciesStore.getHistory = function () {
  return localStorage.speciesHistory ? localStorage.speciesHistory : _history;
};

SpeciesStore.getEmpire = function () {
  return localStorage.empire ? localStorage.empire : _empire;
};

module.exports = SpeciesStore;
