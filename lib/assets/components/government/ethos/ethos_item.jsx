var React = require('react');
var EthosActions = require('../../../actions/government/ethos_actions');
var EthosNames = require('../../../constants/government/ethos/ethos_names');
var EthosGroups = require('../../../constants/government/ethos/ethos_groups');
var EthosStore = require('../../../stores/ethos');
var EthosInfo = require('./ethos_info');

var EthosItem = React.createClass({
  getInitialState: function () {
    return({
      ethos: this.props.id,
      pos: [-1000, -1000],
      ethicsPoints: EthosStore.points(),
      currentEthos: EthosStore.all()
    });
  },

  componentDidMount: function () {
    this.ethosListener = EthosStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.ethosListener.remove();
  },

  _onChange: function () {
    this.setState({
      ethicsPoints: EthosStore.points(),
      currentEthos: EthosStore.all()
    });
  },

  onHover: function (e) {
    var ethos = e.target.id;
    var pos = [35, 35];
    this.setState({
      ethos: ethos,
      pos: pos
    });
  },

  onLeave: function () {
    this.setState({
      pos: [-1000, -1000]
    });
  },

  onClick: function (e) {
    var ethos = e.target.id;
    var points = 1;
    if (/^fanatic/.test(ethos)) {
      points += 1
    }
    if (this.state.currentEthos.includes(ethos)) {
      EthosActions.updatePoints(points);
      EthosActions.removeEthos(ethos);
    } else if (this.validEthos(points, ethos)) {
      EthosActions.updatePoints(points * -1);
      EthosActions.addEthos(ethos);
    }
  },

  validEthos: function (points, ethos) {
    var valid = true;
    var currentEthos = this.state.currentEthos;
    if ((this.state.ethicsPoints - points) < 0) {
      valid = false;
    }
    Object.keys(EthosGroups).forEach ( function(ethosGroup) {
      var count = 0;
      Object.keys(EthosGroups[ethosGroup]).forEach ( function(subEthos) {
        if (subEthos === ethos) {
          count += 1;
        }
        if (currentEthos.includes(subEthos)) {
          count += 1;
        }
        if (count > 1) {
          valid = false;
        }
      });
    });

    return valid;
  },

  render: function() {
    var id = this.props.id;
    var CSSClass = "ethos " + EthosNames[id];
    if ( this.state.currentEthos.includes(id) ) {
      CSSClass += " ethos-selected"
    }
    var top = this.state.pos[1];
    var left = this.state.pos[0];

    var divStyle = {
      top: top,
      left: left
    };

    return (
      <div>
        <div
          onMouseOver={this.onHover}
          onMouseOut={this.onLeave}
          onClick={this.onClick}
          className={CSSClass}
          id={id}>
          <EthosInfo
            styling={divStyle}
            ethos={this.state.ethos}
            pos={this.state.pos} />
        </div>
      </div>
    );
  }

});

module.exports = EthosItem;
