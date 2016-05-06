var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');
var GovernmentConstants = require('../constants/government/government/government_constants');
var Util = require('../util/util_functions.js');

var _currentGovernment = "indirect_democracy";

var GovernmentStore = new Store(AppDispatcher);

GovernmentStore.currentGovernment = function () {
  if (Util.localStorageAvailable && localStorage.currentGovernment) {
    return localStorage.currentGovernment;
  } else {
    return _currentGovernment;
  }
};

GovernmentStore.resetGovernment = function () {
  if (Util.localStorageAvailable) {
    localStorage.currentGovernment = "indirect_democracy";
    return localStorage.currentGovernment;
  } else {
    _currentGovernment = "indirect_democracy";
    return _currentGovernment;
  }
};

GovernmentStore.updateGovernment = function(government) {
  if (Util.localStorageAvailable) {
    localStorage.currentGovernment = government;
  } else {
    _currentGovernment = government;
  }
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
