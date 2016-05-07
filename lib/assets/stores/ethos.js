var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var EthosConstants = require('../constants/government/ethos/ethos_constants');
var Util = require('../util/util_functions.js');

var _currentEthos = {};
var _ethosPoints = 3;

var EthosStore = new Store(AppDispatcher);

EthosStore.all = function () {
  if (Util.localStorageAvailable() && localStorage.currentEthos) {
    _currentEthos = JSON.parse(localStorage.currentEthos);
  }
  return Object.keys(_currentEthos).map( function(key) {
    return _currentEthos[key];
  });
};

EthosStore.points = function() {
  if (Util.localStorageAvailable() && localStorage.ethosPoints !== undefined) {
    _ethosPoints = localStorage.ethosPoints;
  }
  return _ethosPoints;
};

EthosStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case EthosConstants.UPDATE_POINTS:
      EthosStore.updatePoints(payload.points);
      EthosStore.__emitChange();
      break;
    case EthosConstants.ADD_ETHOS:
      EthosStore.addEthos(payload.ethos);
      EthosStore.__emitChange();
      break;
    case EthosConstants.REMOVE_ETHOS:
      EthosStore.removeEthos(payload.ethos);
      EthosStore.__emitChange();
      break;
    case EthosConstants.RESET_ETHOS:
      EthosStore.fullResetEthos();
      EthosStore.__emitChange();
      break;
  }
};

EthosStore.fullResetEthos = function () {
  _currentEthos = {};
  _ethosPoints = 3;
  if (Util.localStorageAvailable()) {
    localStorage.currentEthos = JSON.stringify(_currentEthos);
    localStorage.ethosPoints = _ethosPoints;
  }
};

EthosStore.addEthos = function(ethos) {
  _currentEthos[ethos] = ethos;
  if (Util.localStorageAvailable()) {
    localStorage.currentEthos = JSON.stringify(_currentEthos);
  }
};

EthosStore.removeEthos = function(ethos) {
  delete _currentEthos[ethos];
  if (Util.localStorageAvailable()) {
    localStorage.currentEthos = JSON.stringify(_currentEthos);
  }
};

EthosStore.updatePoints = function (points) {
  _ethosPoints += points;
  if (Util.localStorageAvailable()) {
    localStorage.ethosPoints = _ethosPoints;
  }
};

module.exports = EthosStore;
