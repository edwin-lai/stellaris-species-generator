var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var Util = require('../util/util_functions.js');
var Traits = require('../constants/traits.js');

var _selectedTraits = new Set();
var _excludedTraits = new Set();
var _traitPoints = 2;
var TRAIT_PICKS = 4;

var TraitStore = new Store(AppDispatcher);

TraitStore.all = function () {
  return _selectedTraits;
};

TraitStore.hasSelected = function (trait) {
  return _selectedTraits.has(trait);
};

TraitStore.pointsLeft = function () {
  return _traitPoints;
};

TraitStore.picksLeft = function () {
  return TRAIT_PICKS - _selectedTraits.size;
};

TraitStore.excludedTraits = function () {
  return _excludedTraits;
};

TraitStore.hasExcluded = function (trait) {
  return _excludedTraits.has(trait);
};



TraitStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'ADD_TRAIT':
      if (payload.trait.cost <= _traitPoints && TraitStore.picksLeft() > 0) {
        TraitStore.addTrait(payload.trait);
        TraitStore.__emitChange();
      }
      break;
    case 'REMOVE_TRAIT':
      TraitStore.removeTrait(payload.trait);
      TraitStore.__emitChange();
      break;
    case 'RESET_TRAITS':
      TraitStore.resetTraits();
      TraitStore.__emitChange();
      break;
  }
};

TraitStore.addTrait = function (trait) {
  _selectedTraits.add(trait);
  if (trait.excludes) {
    trait.excludes().forEach(function (oppositeTrait) {
      _excludedTraits.add(oppositeTrait);
    });
  }
  _traitPoints -= trait.cost;

  this.save();
};

TraitStore.removeTrait = function (trait) {
  _selectedTraits.delete(trait);
  if (trait.excludes) {
    trait.excludes().forEach(function (oppositeTrait) {
      _excludedTraits.delete(oppositeTrait);
    });
  }

  _traitPoints += trait.cost;

  if (_traitPoints < 0) {
    TraitStore.resetTraits();
  }

  this.save();
};

TraitStore.resetTraits = function () {
  _selectedTraits.clear();
  _excludedTraits.clear();
  _traitPoints = 2;

  this.save();
};

// saves and loads trait *names* to localStorage

TraitStore.save = function () {
  if (Util.localStorageAvailable()) {
    localStorage.selectedTraits = JSON.stringify([..._selectedTraits].map(
      function (trait) {
        return trait.name.replace(' ', '_').toLowerCase();
      }
    ));
    localStorage.excludedTraits = JSON.stringify([..._excludedTraits].map(
      function (trait) {
        return trait.name.replace(' ', '_').toLowerCase();
      }
    ));
    localStorage.traitPoints = _traitPoints.toString();
  }
};

TraitStore.load = function () {
  if (Util.localStorageAvailable()
    && localStorage.selectedTraits
    && localStorage.excludedTraits
    && localStorage.traitPoints) {
    _selectedTraits = new Set(JSON.parse(localStorage.selectedTraits).map(
      function (key) {
        return Traits[key];
      }
    ));
    _excludedTraits = new Set(JSON.parse(localStorage.excludedTraits).map(
      function (key) {
        return Traits[key];
      }
    ));
    _traitPoints = parseInt(localStorage.traitPoints);
  }
};

module.exports = TraitStore;
