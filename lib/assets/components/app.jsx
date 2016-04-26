var React = require('react');

var App = React.createClass({
  render: function() {
    return this.props.children;
  }
});

module.exports = App;
