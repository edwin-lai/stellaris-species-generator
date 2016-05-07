var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');
var Util = require('../util/util_functions.js');

var _selectedTraits = new Set();
var _excludedTraits = new Set();
var _traitPoints = 2;
var TRAIT_PICKS = 4;

var TraitStore = new Store(AppDispatcher);

TraitStore.all = function () {
  return _selectedTraits;
};

TraitStore.hasSelected = function (trait) {
  return new Set([..._selectedTraits].map(function (el) {
    return JSON.stringify(el);
  })).has(JSON.stringify(trait));
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
  return new Set([..._excludedTraits].map(function (el) {
    return JSON.stringify(el);
  })).has(JSON.stringify(trait));
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

TraitStore.save = function () {
  if (Util.localStorageAvailable) {
    localStorage.selectedTraits = JSON.stringify([..._selectedTraits]);
    localStorage.excludedTraits = JSON.stringify([..._excludedTraits]);
    localStorage.traitPoints = _traitPoints.toString();
  }
};

TraitStore.load = function () {
  if (Util.localStorageAvailable
    && localStorage.selectedTraits
    && localStorage.excludedTraits
    && localStorage.traitPoints) {
    _selectedTraits = new Set(JSON.parse(localStorage.selectedTraits));
    _excludedTraits = new Set(JSON.parse(localStorage.excludedTraits));
    _traitPoints = parseInt(localStorage.traitPoints);
  }
};

module.exports = TraitStore;
