var React = require('react');
var ReactDOM = require('react-dom');
var Government = require('./components/government');
var WeaponBox = require('./components/ship/weapon_box');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Government/>, document.getElementById('root'));
});
