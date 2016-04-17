var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');

var _currentTraits = new Set();
var _excludedTraits = new Set();
var _traitPoints = 2;
var TRAIT_PICKS = 4;

var TraitStore = new Store(AppDispatcher);

TraitStore.all = function () {
  return _currentTraits;
};

TraitStore.pointsLeft = function () {
  return _traitPoints;
};

TraitStore.picksLeft = function () {
  return TRAIT_PICKS - _currentTraits.size;
};

TraitStore.excludedTraits = function () {
  return _excludedTraits;
};

TraitStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'ADD_TRAIT':
      if (payload.trait.cost <= _traitPoints && TraitStore.picksLeft > 0) {
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
  _currentTraits.add(trait);
  if (trait.excludes) {
    trait.excludes.forEach(function (oppositeTrait) {
      _excludedTraits.add(oppositeTrait);
    });
  }
  _traitPoints -= trait.cost;
};

TraitStore.removeTrait = function (trait) {
  _currentTraits.delete(trait);
  if (trait.excludes) {
    trait.excludes.forEach(function (oppositeTrait) {
      _excludedTraits.delete(oppositeTrait);
    });
  }
  _traitPoints += trait.cost;
};

TraitStore.resetTraits = function () {
  _currentTraits.clear();
  _excludedTraits.clear();
  _traitPoints = 2;
};

module.exports = TraitStore;
