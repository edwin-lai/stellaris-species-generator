var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');

var _mouseoverTrait;
var _selectedTraits = {};
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

TraitStore.mouseover = function () {
  return _mouseoverTrait;
};

TraitStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'MOUSEOVER':
      TraitStore.setTooltip(payload.trait);
      TraitStore.__emitChange();
      break;
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

TraitStore.setTooltip = function (trait) {
  _mouseoverTrait = trait;
};

TraitStore.addTrait = function (trait) {
  _selectedTraits[trait.name] = trait;
  if (trait.excludes) {
    trait.excludes().forEach(function (oppositeTrait) {
      _excludedTraits.add(oppositeTrait);
    });
  }
  _traitPoints -= trait.cost;
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
};

TraitStore.resetTraits = function () {
  _mouseoverTrait = undefined;
  _selectedTraits.clear();
  _excludedTraits.clear();
  _traitPoints = 2;
};

module.exports = TraitStore;
