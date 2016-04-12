var React = require('react');
var EthosNames = require('../../../constants/government/ethos/ethos_names');
var EthosItem = require('./ethos_item');

var EthosSelector = React.createClass({

  ethosItems: function () {
    return Object.keys(EthosNames).map ( function(id) {
      return <EthosItem id={id} key={id} />
    });
  },

  render: function() {
    ethosItems = this.ethosItems();

    return (
      <section className="ethos-holder">
        {ethosItems}
      </section>
    );
  }

});

module.exports = EthosSelector;
