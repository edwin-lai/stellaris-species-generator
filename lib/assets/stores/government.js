var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');

_currentGovernment = {}


var EthosStore = new Store(AppDispatcher);


module.exports = EthosStore;
