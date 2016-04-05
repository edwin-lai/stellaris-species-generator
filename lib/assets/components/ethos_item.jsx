var React = require('react');
var PropTypes = React.PropTypes;
var EthosNames = require('../constants/ethos_names');
var EthosInfo = require('./ethos_info');

var EthosItem = React.createClass({
  onHover: function (e) {
    console.log(e.target.id);
    var pos = [e.pageX, e.pageY];
    console.log(pos);
  },

  render: function() {
    var id = this.props.id
    var CSSClass = "ethos " + EthosNames[this.props.id]

    return (
      <div onMouseOver={this.onHover} className={CSSClass} id={id} />
    );
  }

});

module.exports = EthosItem;
