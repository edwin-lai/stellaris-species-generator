var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher'),
    FTLMethodStore = new Store(AppDispatcher);

var warpTravel = {
  name: "Warp Travel",
  description:
    `Mass Drivers that use electromagnetic catapults to accelerate
    projectiles towards targets at blinding speeds. Highly destructive, their
    range is somewhat limited.`,
  recommendation: "(New Players)",
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461877239/warp_hh5r4e.png"
},
wormholeTravel = {
  name: "Wormhome Travel",
  description:
    `Space-to-space missiles armed with nuclear warheads. Missiles
    have excellent range, but they are vulnerable to interception by point-defense
    systems.`,
  recommendation: "(Advanced Players)",
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461877239/wormhole_qnzqk9.png"
},
hyperspaceTravel = {
  name: "Energy Weapons",
  description:
    `These directed-energy weapons emit focused laser beams at their targets. They
    are effective at medium to close ranges.`,
  recommendation: "",
  imageUrl: "http://res.cloudinary.com/dsolojfgkabc/image/upload/v1461877240/hyperspace_pzerf7.png"
};

var _methods = [warpTravel, wormholeTravel, hyperspaceTravel];

FTLMethodStore.all = function () {
  return _methods.slice();
};

module.exports = FTLMethodStore;
