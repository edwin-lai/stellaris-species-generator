var React = require('react');
var PropTypes = React.PropTypes;
var EthosNames = require('../constants/ethos_names');
var EthosInfo = require('./ethos_info');

var EthosItem = React.createClass({
  getInitialState: function () {
    return(this.blankAttrs());
  },

  blankAttrs: function () {
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
    console.log(pos);
    console.log(ethos);
  },

  onLeave: function () {
    this.setState({
      ethos: "",
      pos: [-200, -200]
    });
  },

  render: function() {
    var id = this.props.id;
    var CSSClass = "ethos " + EthosNames[this.props.id];
    var top = this.state.pos[1];
    var left = this.state.pos[0];
    console.log(top);
    console.log(left);

    var divStyle = {
      top: top,
      left: left
    };

    return (
      <div>
        <div
          onMouseOver={this.onHover}
          onMouseOut={this.onLeave}
          className={CSSClass}
          id={id} />
        <EthosInfo
          styling={divStyle}
          ethos={this.state.ethos}
          pos={this.state.pos} />
      </div>
    );
  }

});

module.exports = EthosItem;
