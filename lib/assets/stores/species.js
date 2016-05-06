var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');

var _name, _history;

var SpeciesStore = new Store(AppDispatcher);

SpeciesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'SET_SPECIES_NAME':
      _name = payload.speciesName;
      SpeciesStore.__emitChange();
      break;
    case 'SET_SPECIES_HISTORY':
      _history = payload.speciesHistory;
      SpeciesStore.__emitChange();
      break;
  }
};

SpeciesStore.getName = function () {
  return _name;
};

SpeciesStore.getHistory = function () {
  return _history;
};

module.exports = SpeciesStore;
