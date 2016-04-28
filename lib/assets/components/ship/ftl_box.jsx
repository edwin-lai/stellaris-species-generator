var React = require('react'),
    FTLMethodStore = require('../../stores/ftl'),
    FTLMethod = require('./ftl_method');

var FTLBox = React.createClass({
  getFTLMethods: function () {
    var methods = FTLMethodStore.all().map(function (method, i) {
      return (
        <FTLMethod
          key={i}
          name={method.name}
          description={method.description}
          recommendation={method.recommendation}
          imageUrl={method.imageUrl}/>
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
