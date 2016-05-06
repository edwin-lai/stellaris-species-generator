var React = require('react');
var SpeciesStore = require('../../stores/species.js');
var TraitStore = require('../../stores/trait.js');

var Species = React.createClass({
  render: function () {
    return <div className='summary-species'>
      <label>{SpeciesStore.getName()}</label>
      <ul>
        {Array.from(TraitStore.all()).map(function (trait) {
          return <li key={trait.name}>
            <img src={trait.icon_url} />
            {trait.name}
          </li>;
        })}
      </ul>
    </div>;
  }
});

module.exports = Species;
