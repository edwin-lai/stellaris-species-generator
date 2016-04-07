var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var EthosStore = require('../stores/ethos');
var GovernmentConstants = require('../constants/government_constants');

var _currentGovernment = "indirect_democracy";

var GovernmentStore = new Store(AppDispatcher);

GovernmentStore.currentGovernment = function () {
  return _currentGovernment;
};

GovernmentStore.resetGovernment = function () {
  _currentGovernment = "indirect_democracy";
  return _currentGovernment;
};

GovernmentStore.updateGovernment = function(government) {
  _currentGovernment = government;
};

GovernmentStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case GovernmentConstants.UPDATE_GOVERNMENT:
      GovernmentStore.updateGovernment(payload.government);
      GovernmentStore.__emitChange();
      break;
    case GovernmentConstants.RESET_GOVERNMENT:
      GovernmentStore.resetGovernment(payload.government);
      GovernmentStore.__emitChange();
      break;
  }
};


module.exports = GovernmentStore;
