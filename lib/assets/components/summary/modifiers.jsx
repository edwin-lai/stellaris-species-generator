var React = require('react');
var TraitStore = require('../../stores/trait.js');
var EthosStore = require('../../stores/ethos.js');
var EthosModifiers = require('../../constants/government/ethos/ethos_modifiers.js');
var GovtModifiers = require('../../constants/government/government/government_modifiers.js');
var GovtStore = require('../../stores/government.js');
var textCleaner = require('../../util/util_functions.js').textCleaner;

var SpeciesModifiers = React.createClass({
  getInitialState: function () {
    return {
      traits: TraitStore.all(),
      ethos: EthosStore.all().map(function (ethic) {
        return EthosModifiers[ethic];
      }),
      govt: GovtModifiers[GovtStore.currentGovernment()]
    };
  },

  computeModifiers: function () {
    var modifiers = {};
    for (var trait of this.state.traits) {
      let effects = trait.effects;
      for (var effect in effects) {
        if (effects.hasOwnProperty(effect)) {
          if (modifiers[effect]) {
            modifiers[effect].value += effects[effect];
          } else {
            modifiers[effect] = {};
            modifiers[effect].value = effects[effect];
          }
          if (trait.not_percentage) {
            modifiers[effect].not_percentage = true;
          }
        }
      }
    }
    for (var ethic of this.state.ethos) {
      for (effect in ethic) {
        if (ethic.hasOwnProperty(effect)) {
          if (modifiers[effect]) {
            modifiers[effect].value += ethic[effect];
          } else {
            modifiers[effect] = {};
            modifiers[effect].value = ethic[effect];
          }
        }
      }
    }
    for (effect in this.state.govt) {
      if (this.state.govt.hasOwnProperty(effect) && effect.slice(0,3) !== 'txt') {
        if (modifiers[effect]) {
          modifiers[effect].value += this.state.govt[effect][0];
        } else {
          modifiers[effect] = {};
          modifiers[effect].value = this.state.govt[effect][0];
        }
        if (this.state.govt[effect][1] === 0) {
          modifiers[effect].not_percentage = true;
        }
      }
    }
    return modifiers;
  },

  generateModifierListItems: function (modifiers) {
    let listItems = [];
    for (var effect in modifiers) {
      if (modifiers.hasOwnProperty(effect)) {
        let listItem = textCleaner(effect) + ': ';
        if (modifiers[effect].value > 0) {
          listItem = listItem + '+';
        }
        listItem = listItem + modifiers[effect].value.toString();
        if (!modifiers[effect].not_percentage) {
          listItem = listItem + '%';
        }
        listItems.push(listItem);
      }
    }
    return <ul>{
        listItems.map(function (listItem) {
        return <li key={listItem}>{listItem}</li>;
      })
    }</ul>;
  },

  render: function () {
    var modifiers = this.computeModifiers();
    return <div className='summary-modifier'>
      Modifiers
      <hr />
      <div className='modifier-text'>
        {this.generateModifierListItems(modifiers)}
      </div>
    </div>;
  }
});

module.exports = SpeciesModifiers;
