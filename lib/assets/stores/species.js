var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var Util = require('../util/util_functions.js');

var _name, _history, _empire;

var SpeciesStore = new Store(AppDispatcher);

SpeciesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'SET_SPECIES_NAME':
      this.setName(payload.speciesName);
      SpeciesStore.__emitChange();
      break;
    case 'SET_SPECIES_HISTORY':
      this.setHistory(payload.speciesHistory);
      SpeciesStore.__emitChange();
      break;
    case 'SET_EMPIRE':
      this.setEmpire(payload.empire);
      SpeciesStore.__emitChange();
      break;
  }
};

SpeciesStore.setName = function (name) {
  if (Util.localStorageAvailable) {
    localStorage.speciesName = name;
  } else {
    _name = name;
  }
};

SpeciesStore.setHistory = function (history) {
  if (Util.localStorageAvailable) {
    localStorage.speciesHistory = history;
  } else {
    _history = history;
  }
};

SpeciesStore.setEmpire = function (empire) {
  if (Util.localStorageAvailable) {
    localStorage.empire = empire;
  } else {
    _empire = empire;
  }
};

SpeciesStore.getName = function () {
  if (Util.localStorageAvailable && localStorage.speciesName) {
    return localStorage.speciesName;
  } else {
    return _name;
  }
};

SpeciesStore.getHistory = function () {
  if (Util.localStorageAvailable && localStorage.speciesHistory) {
    return localStorage.speciesHistory;
  } else {
    return _history;
  }
};

SpeciesStore.getEmpire = function () {
  if (Util.localStorageAvailable && localStorage.empire) {
    return localStorage.empire;
  } else {
    return _empire;
  }
};

module.exports = SpeciesStore;
