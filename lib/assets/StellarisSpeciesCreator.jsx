var React = require('react');
var ReactDOM = require('react-dom');
var Government = require('./components/government');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Government />, document.getElementById('root'));
});
