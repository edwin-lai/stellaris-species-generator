var React = require('react');
var SpeciesStore = require('../../stores/species.js');
var TraitStore = require('../../stores/trait.js');

var Species = React.createClass({
  summaryPortraitClass: function () {
    if (SpeciesStore.getPortrait()) {
      return 'summary-portrait';
    } else {
      return 'hidden';
    }
  },

  render: function () {
    return <div className='summary-species'>
      <label className='summary-species-name'>{SpeciesStore.getName()}</label>
      <div className='summary-species-wrapper'>
        <img
          className={this.summaryPortraitClass()}
          src={SpeciesStore.getPortrait()} />
        <ul>
          {Array.from(TraitStore.all()).map(function (trait) {
            return <li key={trait.name} className='summary-trait'>
              <img src={trait.icon_url} className='summary-trait-icon'/>
              {trait.name}
            </li>;
          })}
        </ul>
      </div>
    </div>;
  }
});

module.exports = Species;
