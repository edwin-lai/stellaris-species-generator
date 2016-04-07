var AppDispatcher = require('../dispatcher');
var GovernmentConstants = require('../constants/government_constants');

var GovernmentActions = {
  updateGovernment: function (government) {
    AppDispatcher.dispatch({
      actionType: GovernmentConstants.UPDATE_GOVERNMENT,
      government: government
    });
  },
  resetGovernment: function () {
    AppDispatcher.dispatch({
      actionType: GovernmentConstants.RESET_GOVERNMENT,
    });
  }
};

module.exports = GovernmentActions;
