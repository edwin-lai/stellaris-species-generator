var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher'),
    FTLMethodStore = new Store(AppDispatcher),
    Util = require('../util/util_functions.js');

var warpTravel = {
  name: "Warp Travel",
  description:
    `The warp drive generates a subspace bubble around a ship, making faster-than-light speeds attainable. This allows for free but relatively slow travel between stars, given the great distances involved.`,
  recommendation: "(New Players)",
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461877239/warp_hh5r4e.png"
},
wormholeTravel = {
  name: "Wormhole Travel",
  description:
    `Wormhole generators tunnel through subspace and estabish a conduit between two points, permitting travel across vast distances. The large generators are too big to be fitted on ships, requiring special Wormhole Stations to operate.`,
  recommendation: "(Advanced Players)",
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461877239/wormhole_qnzqk9.png"
},
hyperspaceTravel = {
  name: "Hyperspace Travel",
  description:
    `The hyper drive allows ships to temporarily breach the dimension of hyperspace. Interstellar travel is fast but limited to existing paths along the hyperlane network.`,
  recommendation: "",
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461877240/hyperspace_pzerf7.png"
};

var _methods = [warpTravel, wormholeTravel, hyperspaceTravel];

var _currentFTL = "Warp Travel";

var _FTLMap = {
  "Warp Travel": warpTravel.imageUrl,
  "Wormhole Travel": wormholeTravel.imageUrl,
  "Hyperspace Travel": hyperspaceTravel.imageUrl
};

FTLMethodStore.all = function () {
  return _methods.slice();
};

FTLMethodStore.currentFTL = function () {
  if (Util.localStorageAvailable && localStorage.currentFTL) {
    return localStorage.currentFTL;
  } else {
    return _currentFTL;
  }
};

FTLMethodStore.currentFTLImg = function () {
  var currentFTL;
  if (Util.localStorageAvailable && localStorage.currentFTL) {
    currentFTL = localStorage.currentFTL;
  } else {
    currentFTL = _currentFTL;
  }
  if (currentFTL) {
    return _FTLMap[currentFTL];
  }
};

FTLMethodStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'SET_FTL':
      this.setFTL(payload.ftl);
      break;
  }
};

FTLMethodStore.setFTL = function (ftl) {
  if (Util.localStorageAvailable) {
    localStorage.currentFTL = ftl;
  } else {
    _currentFTL = ftl;
  }
};

module.exports = FTLMethodStore;
