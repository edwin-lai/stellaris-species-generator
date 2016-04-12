var AppDispatcher = require('../../dispatcher');
var EthosConstants = require('../../constants/government/ethos/ethos_constants');

var EthosActions = {
  updatePoints: function (points) {
    AppDispatcher.dispatch({
      actionType: EthosConstants.UPDATE_POINTS,
      points: points
    });
  },
  addEthos: function (ethos) {
    AppDispatcher.dispatch({
      actionType: EthosConstants.ADD_ETHOS,
      ethos: ethos
    });
  },
  removeEthos: function (ethos) {
    AppDispatcher.dispatch({
      actionType: EthosConstants.REMOVE_ETHOS,
      ethos: ethos
    });
  },
  resetEthos: function () {
    AppDispatcher.dispatch({
      actionType: EthosConstants.RESET_ETHOS,
    });
  }
};

module.exports = EthosActions;
