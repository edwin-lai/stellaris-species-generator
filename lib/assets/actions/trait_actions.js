var AppDispatcher = require('../dispatcher.js');

var TraitActions = {
  addTrait: function (trait) {
    AppDispatcher.dispatch({
      actionType: 'ADD_TRAIT',
      trait: trait
    });
  },
  removeTrait: function (trait) {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_TRAIT',
      trait: trait
    });
  },
  resetTraits: function () {
    AppDispatcher.dispatch({
      actionType: 'RESET_TRAITS'
    });
  }
};

module.exports = TraitActions;
