var React = require('react');
var PropTypes = React.PropTypes;
var EthosNames = require('../constants/ethos_names');
var EthosInfo = require('./ethos_info');

var EthosItem = React.createClass({
  getInitialState: function () {
    return({
      ethos: "",
      pos: [-200, -200]
    });
  },

  onHover: function (e) {
    var ethos = e.target.id
    var pos = [e.pageX, e.pageY];
    this.setState({
      ethos: ethos,
      pos: pos
    });
  },

  render: function() {
    var id = this.props.id
    var CSSClass = "ethos " + EthosNames[this.props.id]

    return (
      <div>
        <div onMouseOver={this.onHover} className={CSSClass} id={id} />
        <EthosInfo ethos={this.state.ethos} pos={this.state.pos} />
      </div>
    );
  }

});

module.exports = EthosItem;
