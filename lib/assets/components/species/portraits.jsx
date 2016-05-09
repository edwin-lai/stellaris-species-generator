var React = require('react');
var Portrait = require('./portrait.jsx');
var mammalian = require('../../constants/portraits/mammalian.js');
var arthropoid = require('../../constants/portraits/arthropoid.js');
var avian = require('../../constants/portraits/avian.js');
var fungoid = require('../../constants/portraits/fungoid.js');
var molluscoid = require('../../constants/portraits/molluscoid.js');
var reptilian = require('../../constants/portraits/reptilian.js');

var Portraits = React.createClass({
  render: function () {
    return <div className='portraits'>
      <h2 className='portrait-type'>Mammalian</h2>
      <hr></hr>
      {mammalian.map(function (el) {
        return <Portrait key={el} url={el}/>;
      })}
      <h2 className='portrait-type'>Reptilian</h2>
      <hr></hr>
      {reptilian.map(function (el) {
        return <Portrait key={el} url={el}/>;
      })}
      <h2 className='portrait-type'>Avian</h2>
      <hr></hr>
      {avian.map(function (el) {
        return <Portrait key={el} url={el}/>;
      })}
      <h2 className='portrait-type'>Arthropoid</h2>
      <hr></hr>
      {arthropoid.map(function (el) {
        return <Portrait key={el} url={el}/>;
      })}
      <h2 className='portrait-type'>Molluscoid</h2>
      <hr></hr>
      {molluscoid.map(function (el) {
        return <Portrait key={el} url={el}/>;
      })}
      <h2 className='portrait-type'>Fungoid</h2>
      <hr></hr>
      {fungoid.map(function (el) {
        return <Portrait key={el} url={el}/>;
      })}
    </div>;
  }
});

module.exports = Portraits;
