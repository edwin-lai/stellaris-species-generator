var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');

var _mouseoverTrait;

var MouseoverStore = new Store(AppDispatcher);

MouseoverStore.mouseover = function () {
  return _mouseoverTrait;
};

MouseoverStore.setTooltip = function (trait) {
  _mouseoverTrait = trait;
};

MouseoverStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'MOUSEOVER':
      this.setTooltip(payload.trait);
      this.__emitChange();
      break;
  }
};

module.exports = MouseoverStore;
