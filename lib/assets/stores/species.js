var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var Util = require('../util/util_functions.js');

var _name, _empire, _portrait;

var SpeciesStore = new Store(AppDispatcher);

SpeciesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'SET_SPECIES_NAME':
      this.setName(payload.speciesName);
      SpeciesStore.__emitChange();
      break;
    case 'SET_EMPIRE':
      this.setEmpire(payload.empire);
      SpeciesStore.__emitChange();
      break;
    case 'SET_PORTRAIT':
      this.setPortrait(payload.portrait);
      SpeciesStore.__emitChange();
      break;
  }
};

SpeciesStore.setName = function (name) {
  if (Util.localStorageAvailable()) {
    localStorage.speciesName = name;
  } else {
    _name = name;
  }
};

SpeciesStore.setEmpire = function (empire) {
  if (Util.localStorageAvailable()) {
    localStorage.empire = empire;
  } else {
    _empire = empire;
  }
};

SpeciesStore.setPortrait = function (portrait) {
  if (Util.localStorageAvailable()) {
    localStorage.portrait = portrait;
  } else {
    _portrait = portrait;
  }
};

SpeciesStore.getName = function () {
  if (Util.localStorageAvailable() && localStorage.speciesName) {
    return localStorage.speciesName;
  } else {
    return _name;
  }
};

SpeciesStore.getEmpire = function () {
  if (Util.localStorageAvailable() && localStorage.empire) {
    return localStorage.empire;
  } else {
    return _empire;
  }
};

SpeciesStore.getPortrait = function () {
  if (Util.localStorageAvailable() && localStorage.portrait) {
    return localStorage.portrait;
  } else {
    return _portrait;
  }
};

module.exports = SpeciesStore;
