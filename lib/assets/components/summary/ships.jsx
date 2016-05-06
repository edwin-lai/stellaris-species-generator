var React = require('react');
var WeaponStore = require('../../stores/weapon.js');
var FTLStore = require('../../stores/ftl.js');

var Ships = React.createClass({
  render: function () {
    return <div className='summary-ships'>
      <div className='summary-weapon-name'>
        {WeaponStore.currentWeapon()}
        <img className='summary-weapon' src={WeaponStore.currentWeaponImg()} />
      </div>
      <div className='summary-ftl-name'>
        {FTLStore.currentFTL()}
        <img className='summary-ftl' src={FTLStore.currentFTLImg()} />
      </div>
    </div>;
  }
});

module.exports = Ships;
