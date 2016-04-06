var AppDispatcher = require('../dispatcher');
var EthosConstants = require('../constants/ethos_constants');

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
  }
};

module.exports = EthosActions;
