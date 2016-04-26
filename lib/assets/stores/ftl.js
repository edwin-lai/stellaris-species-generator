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
  imageUrl: ""
},
wormholeTravel = {
  name: "Wormhome Travel",
  description:
    `Space-to-space missiles armed with nuclear warheads. Missiles
    have excellent range, but they are vulnerable to interception by point-defense
    systems.`,
  recommendation: "(Advanced Players)",
  imageUrl: ""
},
hyperspaceTravel = {
  name: "Energy Weapons",
  description:
    `These directed-energy weapons emit focused laser beams at their targets. They
    are effective at medium to close ranges.`,
  recommendation: "",
  imageUrl: ""
};

var _methods = [warpTravel, wormholeTravel, hyperspaceTravel];

FTLMethodStore.prototype.all = function () {
  return _methods.slice();
};

module.exports = FTLMethodStore;
