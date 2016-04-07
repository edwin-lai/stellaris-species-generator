var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var EthosStore = require('../stores/ethos');

var _currentGovernment = "indirect_democracy";

var GovernmentStore = new Store(AppDispatcher);

GovernmentStore.currentGovernment = function () {
  return _currentGovernment;
};

GovernmentStore.resetGovernment = function () {
  _currentGovernment = "indirect_democracy";
  return _currentGovernment;
};

GovernmentStore.__onDispatch = function (payload) {

};


module.exports = GovernmentStore;
