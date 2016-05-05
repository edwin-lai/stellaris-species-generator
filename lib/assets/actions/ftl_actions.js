var AppDispatcher = require('../dispatcher');

var FTLActions = {
  setFTL: function (ftl) {
    AppDispatcher.dispatch({
      actionType: 'SET_FTL',
      ftl: ftl
    });
  }
};

module.exports = FTLActions;
