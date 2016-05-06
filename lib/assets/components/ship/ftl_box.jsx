var React = require('react'),
    FTLMethodStore = require('../../stores/ftl'),
    FTLActions = require('../../actions/ftl_actions.js'),
    FTLMethod = require('./ftl_method');

var FTLBox = React.createClass({
  getInitialState: function () {
    return {selected: FTLMethodStore.currentFTL()};
  },

  setCurrentFTL: function (FTLName) {
    FTLActions.setFTL(FTLName);
    this.setState({selected: FTLName});
  },

  getFTLMethods: function () {
    var that = this;
    var methods = FTLMethodStore.all().map(function (method, i) {
      return (
        <FTLMethod
          key={i}
          name={method.name}
          description={method.description}
          recommendation={method.recommendation}
          imageUrl={method.imageUrl}
          selected={that.state.selected === method.name}
          setCurrentFTL={that.setCurrentFTL}/>
      );
    });

    return methods;
  },
  render: function () {
    return (
      <div className="ftl-box">
        {this.getFTLMethods()}
        <div className="button-box">
          <button>Cancel</button>
          <button>OK</button>
        </div>
      </div>
    );
  }
});

module.exports = FTLBox;
