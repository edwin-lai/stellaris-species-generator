var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');

var _currentGovernment = "indirect_democracy";

var GovernmentStore = new Store(AppDispatcher);

GovernmentStore.currentGovernment = function () {
  return _currentGovernment;
};

GovernmentStore.resetGovernment = function () {
  _currentGovernment = "indirect_democracy";
  return _currentGovernment;
};


module.exports = GovernmentStore;
