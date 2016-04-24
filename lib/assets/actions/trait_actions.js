var AppDispatcher = require('../dispatcher.js');

var TraitActions = {
  mouseover: function (trait) {
    AppDispatcher.dispatch({
      actionType: 'MOUSEOVER',
      trait: trait
    });
  },
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
