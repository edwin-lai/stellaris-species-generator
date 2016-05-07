var React = require('react');
var TraitStore = require('../stores/trait.js');

var App = React.createClass({
  componentWillMount: function () {
    TraitStore.load();
  },
  
  render: function() {
    return this.props.children;
  }
});

module.exports = App;
