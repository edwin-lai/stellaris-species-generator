var React = require('react');
var PropTypes = React.PropTypes;

var EthosInfo = React.createClass({

  getInitialState: function () {
    return({ethos: ""});
  },

  componentWillReceiveProps: function () {
    var ethos = this.props.ethos;
    if (ethos) {
      this.setState({ethos: ethos});
    }
  },

  render: function() {
    return (
      <div />
    );
  }

});

module.exports = EthosInfo;
