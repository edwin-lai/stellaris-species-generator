var React = require('react');
var TraitStore = require('../stores/trait.js');
var Util = require('../util/util_functions.js');

var App = React.createClass({
  componentWillMount: function () {
    TraitStore.load();
    if (Util.localStorageAvailable) {
      try {
        JSON.parse(localStorage.currentPlanet);
        localStorage.clear();
      } catch (e) {
        
      }
    }
  },

  render: function() {
    return this.props.children;
  }
});

module.exports = App;
