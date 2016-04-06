var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');

_currentEthos = {};
_ethosPoints = 3;

var EthosStore = new Store(AppDispatcher);

EthosStore.all = function () {
  return Object.keys(_currentEthos).map( function(key) {
    return _currentEthos[key];
  });
};

EthosStore.points = function() {
  return _ethosPoints;
};

EthosStore.__onDispatch = function (payload) {

};

EthosStore.fullResetEthos = function () {
  _currentEthos = {};
  _ethosPoints = 3;
};

EthosStore.resetEthos = function(ethos) {

};

module.exports = EthosStore;
